import { useQuery, gql } from "@apollo/client";
import VehiclesList from "../components/VehiclesList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";

const SEARCH_VEHICLES = gql`
  query VEHICLES($lng: I18NLocaleCode) {
    vehicles(pagination: { limit: 20 }, sort: "id:desc", locale:$lng) {
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

const QAvehicles = () => {
  const { i18n } = useTranslation();
  const { loading, error, data } = useQuery(SEARCH_VEHICLES, {
    variables: { lng: i18n.resolvedLanguage },
  });
  if (loading) return <LoadingMsg />;
  if (error) return <ErrorMsg />;
  return <VehiclesList vehicles={data.vehicles.data} />;
};

export default QAvehicles;
