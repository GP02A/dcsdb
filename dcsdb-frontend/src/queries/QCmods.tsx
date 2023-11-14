import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";

const SEARCH_MODS = gql`
  query MODS($st: String!, $lng: I18NLocaleCode) {
    mods(
      filters: {
        or: [
          { name: { contains: $st } }
          { vehicles: { name: { contains: $st } } }
          { vehicles: { alias: { contains: $st } } }
          { vehicles: { variants: { name: { contains: $st } } } }
          { vehicles: { variants: { alias: { contains: $st } } } }
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
          developers {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          game_status
          dlcs {
            data {
              id
              attributes {
                id: mid
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

const QCmods = (props) => {
  const { t, i18n } = useTranslation();
  const { loading, error, data } = useQuery(SEARCH_MODS, {
    variables: { st: props.searchText, lng: i18n.resolvedLanguage },
  });

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  if (data.mods.data.length === 0) {
    // console.log(data.ips);
    return (
      <p className="ion-margin ion-text-center" color="warning">
        {t("QCmods.noresult")}
      </p>
    );
  } else {
    // console.log(data.ips);
    return <ModsList mods={data.mods.data} />;
  }
};

export default QCmods;
