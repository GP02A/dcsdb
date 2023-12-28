import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
} from "@ionic/react";
import { useState } from "react";

const SEARCH_MODS = gql`
  query MODS($lng: I18NLocaleCode, $start: Int!, $limit: Int!) {
    mods(
      pagination: { start: $start, limit: $limit }
      sort: "mid:desc"
      locale: $lng
      filters: {
        and: [{ dlcs: { id: { eq: null } } }, { mod_types: { mid: { eq: 1 } } }]
      }
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
          mod_types {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
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

const limit = 30;
const QAmods_free_drivable = () => {
  const { i18n, t } = useTranslation();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(SEARCH_MODS, {
    variables: {
      lng: i18n.resolvedLanguage,
      start: page * limit,
      limit: limit,
    },
    notifyOnNetworkStatusChange: true,
  });
  if (loading) return <LoadingMsg />;
  if (error) return <ErrorMsg />;
  const loadMore = async (event) => {
    setPage(page + 1);
    const { data: newData } = await fetchMore({
      variables: {
        start: (page + 1) * limit,
      },
    });
    // console.log(data.mods.data.length);
    event.target.complete();
    // Disable infinite scroll when no more data
    if (newData.mods.data.length < limit) {
      setHasMore(false);
      // console.log("no more data");
    }
  };
  // return <ModsList mods={data.mods.data} />;
  return (
    <>
      <ModsList mods={data.mods.data} />
      {!hasMore && (
        <IonButton
          expand="block"
          fill="outline"
          href={import.meta.env.BASE_URL + "tab1"}
          rel="noopener noreferrer"
        >
          {t("InfiniteScroll.button")}
        </IonButton>
      )}
      <IonInfiniteScroll
        threshold="100px"
        onIonInfinite={(e) => loadMore(e)}
        disabled={!hasMore}
      >
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText={t("InfiniteScroll.loadingtext")}
        ></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </>
  );
};

export default QAmods_free_drivable;
