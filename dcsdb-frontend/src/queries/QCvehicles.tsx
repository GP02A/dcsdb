import { useQuery, gql } from "@apollo/client";
import VehiclesList from "../components/VehiclesList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";

const SEARCH_VEHICLES = gql`
  query VEHICLES($st: String!, $lng: I18NLocaleCode) {
    vehicles(
      filters: {
        or: [
          { name: { contains: $st } }
          { alias: { contains: $st } }
          { variants: { name: { contains: $st } } }
          { variants: { alias: { contains: $st } } }
        ]
      }
      pagination: { limit: 20 }
      sort: "id:desc"
      locale: $lng
    ) {
      data {
        id
        attributes {
          id: mid
          name
          alias
          cover {
            data {
              attributes {
                url
              }
            }
          }
          national_origin {
            data {
              id
              attributes {
                id: mid
                name
                displayname
              }
            }
          }
          manufacturers {
            data {
              attributes {
                id: mid
                name
              }
            }
          }
          vehicle_domains {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          mods {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
        }
      }
    }
  }
`;

const QCvehicles = (props) => {
  const { t, i18n } = useTranslation();
  const { loading, error, data } = useQuery(SEARCH_VEHICLES, {
    variables: { st: props.searchText, lng: i18n.resolvedLanguage  },
  });

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  if (data.vehicles.data.length === 0) {
    // console.log(data.ips);
    return (
      <p className="ion-margin ion-text-center" color="warning">
        {t("QCvehicles.noresult")}
      </p>
    );
  } else {
    // console.log(data.ips);
    return <VehiclesList vehicles={data.vehicles.data} />;
  }
};

export default QCvehicles;
