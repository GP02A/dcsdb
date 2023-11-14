import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";

const SEARCH_MODS = gql`
  query MODS($lng: I18NLocaleCode) {
    mods(pagination: { limit: 20 }, sort: "id:desc", locale: $lng) {
      data {
        id
        attributes {
          id: mid
          name
          developers {
            data {
              id
              attributes {
                name
              }
            }
          }
          game_status
          dlcs {
            data {
              id
              attributes {
                name
              }
            }
          }
          vehicles {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          environments {
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

const QAmods = () => {
  const { i18n } = useTranslation();
  const { loading, error, data } = useQuery(SEARCH_MODS, {
    variables: { lng: i18n.resolvedLanguage },
  });
  if (loading) return <LoadingMsg />;
  if (error) return <ErrorMsg />;
  return <ModsList mods={data.mods.data} />;
};

export default QAmods;
