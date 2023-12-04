import { useQuery, gql } from "@apollo/client";
import VehiclesList from "../components/VehiclesList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { useTranslation } from "react-i18next";
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
} from "@ionic/react";
import { useState } from "react";

const SEARCH_VEHICLES = gql`
  query VEHICLES($lng: I18NLocaleCode, $start: Int!, $limit: Int!) {
    vehicles(
      pagination: { start: $start, limit: $limit }
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

const limit = 20;
const QAvehicles = () => {
  const { i18n, t } = useTranslation();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(SEARCH_VEHICLES, {
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
    console.log(data.vehicles.data.length);
    event.target.complete();
    // Disable infinite scroll when no more data
    if (newData.vehicles.data.length < limit) {
      setHasMore(false);
      // console.log("no more data");
    }
  };
  // return <VehiclesList vehicles={data.vehicles.data} />;
  return (
    <>
      <VehiclesList vehicles={data.vehicles.data} />
      {!hasMore && (
        <IonButton
          expand="block"
          fill="outline"
          href={import.meta.env.BASE_URL + "tab2"}
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

export default QAvehicles;
