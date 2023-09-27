import { useQuery, gql } from "@apollo/client";
import VehiclesList from "../components/VehiclesList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";

const SEARCH_VEHICLES = gql`
  query VEHICLES($st: String!) {
    vehicles(
      filters: {
        or: [
          { name: { contains: $st } }
          { alias: { contains: $st } }
          { variants: { name: { contains: $st } } }
          { variants: { alias: { contains: $st } } }
        ]
      }
    ) {
      data {
        id
        attributes {
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
                name
                displayname
              }
            }
          }
          manufacturers {
            data {
              attributes {
                name
              }
            }
          }
          vehicle_domains {
            data {
              id
              attributes {
                name
              }
            }
          }
          mods {
            data {
              id
              attributes {
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
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(SEARCH_VEHICLES, {
    variables: { st: props.searchText },
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
