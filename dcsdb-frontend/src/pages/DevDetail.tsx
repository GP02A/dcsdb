import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItemGroup,
  IonItemDivider,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import ModsList from "../components/ModsList";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

const DEV = gql`
  query DEV($id: ID!) {
    developer(id: $id) {
      data {
        id
        attributes {
          id: mid
          name
          hp
          mods(pagination: { limit: 100 }, sort: "id:desc") {
            data {
              id
              attributes {
                id: mid
                name
                dlcs {
                  data {
                    id
                    attributes {
                      id: mid
                      name
                    }
                  }
                }
                game_status
              }
            }
          }
        }
      }
    }
  }
`;

const DevDetail = (pass) => {
  const { t } = useTranslation();
  const [pageAll, setPageAll] = useState(0);
  const infiniteScrollRef = useRef(null);
  const { loading, error, data } = useQuery(DEV, {
    variables: { id: pass.match.params.id },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Loading />;
  // if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  // if (error) return <p>Error :(</p>;

  const itemsPerPage = 30;

  const modsAll = data.developer.data.attributes.mods.data.slice(
    pageAll * itemsPerPage,
    (pageAll + 1) * itemsPerPage
  );

  const loadMoreItems = () => {
    setPageAll(pageAll + 1);
    infiniteScrollRef.current.complete();
  };

  return (
    <IonPage>
      {/* {console.log(data)} */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>{data.developer.data.attributes.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {data.developer.data.attributes.name}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {data.developer.data.attributes.hp && (
          <IonButton
            expand="full"
            href={data.developer.data.attributes.hp}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("DevDetail.hp")}
          </IonButton>
        )}
        <IonItemGroup>
          <IonItemDivider>{t("DevDetail.mods")}</IonItemDivider>
          <ModsList mods={modsAll} />
        </IonItemGroup>
        {pageAll > 0 &&
          data.developer.data.attributes.mods.data.length <=
            (pageAll + 1) * itemsPerPage && (
            <IonButton
              expand="block"
              fill="outline"
              // href={import.meta.env.BASE_URL + "nation/"+ pass.match.params.id}
              href={pass.match.url}
              rel="noopener noreferrer"
            >
              {t("InfiniteScroll.button")}
            </IonButton>
          )}
        <IonInfiniteScroll
          ref={infiniteScrollRef}
          threshold="100px"
          onIonInfinite={loadMoreItems}
          disabled={
            data.developer.data.attributes.mods.data.length <=
            (pageAll + 1) * itemsPerPage
          }
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText={t("InfiniteScroll.loadingtext")}
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default DevDetail;
