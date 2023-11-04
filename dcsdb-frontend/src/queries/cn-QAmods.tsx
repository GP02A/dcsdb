import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";

const SEARCH_MODS = gql`
  query MODS {
    mods(pagination: { limit: 20 } ,sort: "id:desc") {
      data {
        id
        attributes {
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
  const { loading, error, data } = useQuery(SEARCH_MODS);
  if (loading) return <LoadingMsg />;
  if (error) return <ErrorMsg />;
  return <ModsList mods={data.mods.data} />;
};

export default QAmods;
