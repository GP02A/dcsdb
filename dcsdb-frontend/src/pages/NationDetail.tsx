import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
} from "@ionic/react";
import { useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import VehiclesList from "../components/VehiclesList";
import { useTranslation } from "react-i18next";

const NATION = gql`
  query NATION($id: ID!) {
    nation(id: $id) {
      data {
        id
        attributes {
          id: mid
          name
          vehicles(pagination: { limit: 200 }, sort: "mid:desc") {
            data {
              id
              attributes {
                id: mid
                name
                cover {
                  data {
                    attributes {
                      url
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
              }
            }
          }
        }
      }
    }
  }
`;

const NationDetail = (pass) => {
  const { t } = useTranslation();
  const [seg, setSeg] = useState("all");
  // console.log(window.location.href)
  // console.log(pass.match);

  const [pageAll, setPageAll] = useState(0);
  const [pageAir, setPageAir] = useState(0);
  const [pageWater, setPageWater] = useState(0);
  const [pageLand, setPageLand] = useState(0);

  const infiniteScrollRef = useRef(null);

  const { loading, error, data } = useQuery(NATION, {
    variables: { id: pass.match.params.id },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Loading />;
  // if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  // if (error) return <p>Error :(</p>;
  // console.log(data.nation.data.attributes.vehicles.data.filter(vehicle => vehicle.attributes.vehicle_domains.data.some(domain => domain.attributes.id === 1)));
  const air = data.nation.data.attributes.vehicles.data.filter((vehicle) =>
    vehicle.attributes.vehicle_domains.data.some(
      (domain) => domain.attributes.id === 1
    )
  );
  const water = data.nation.data.attributes.vehicles.data.filter((vehicle) =>
    vehicle.attributes.vehicle_domains.data.some(
      (domain) => domain.attributes.id === 2
    )
  );
  const land = data.nation.data.attributes.vehicles.data.filter((vehicle) =>
    vehicle.attributes.vehicle_domains.data.some(
      (domain) => domain.attributes.id === 3
    )
  );

  const itemsPerPage = 30;

  const vehiclesAll = data.nation.data.attributes.vehicles.data.slice(
    pageAll * itemsPerPage,
    (pageAll + 1) * itemsPerPage
  );
  const vehiclesAir = air.slice(
    pageAir * itemsPerPage,
    (pageAir + 1) * itemsPerPage
  );
  const vehiclesWater = water.slice(
    pageWater * itemsPerPage,
    (pageWater + 1) * itemsPerPage
  );
  const vehiclesLand = land.slice(
    pageLand * itemsPerPage,
    (pageLand + 1) * itemsPerPage
  );

  const loadMoreItems = () => {
    switch (seg) {
      case "all":
        setPageAll(pageAll + 1);
        break;
      case "air":
        setPageAir(pageAir + 1);
        break;
      case "water":
        setPageWater(pageWater + 1);
        break;
      case "land":
        setPageLand(pageLand + 1);
        break;
    }
    infiniteScrollRef.current.complete();
  };

  return (
    <IonPage>
      {/* {console.log(data)} */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>{data.nation.data.attributes.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{data.nation.data.attributes.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemDivider sticky={true}>
          <IonToolbar>
            <IonSegment
              value={seg}
              onIonChange={(e) => {
                setSeg(e.detail.value.toString());
              }}
              scrollable={true}
            >
              <IonSegmentButton value="all">
                <IonLabel>{t("Tab2.all")}</IonLabel>
              </IonSegmentButton>
              {air.length > 0 && (
                <IonSegmentButton value="air">
                  <IonLabel>{t("Tab2.air")}</IonLabel>
                </IonSegmentButton>
              )}
              {water.length > 0 && (
                <IonSegmentButton value="water">
                  <IonLabel>{t("Tab2.water")}</IonLabel>
                </IonSegmentButton>
              )}
              {land.length > 0 && (
                <IonSegmentButton value="land">
                  <IonLabel>{t("Tab2.land")}</IonLabel>
                </IonSegmentButton>
              )}
            </IonSegment>
          </IonToolbar>
        </IonItemDivider>

        {/* <a href={pass.match.url}>{pass.match.url}</a><br/>
        <a href={import.meta.env.BASE_URL + pass.match.url}>
          {import.meta.env.BASE_URL + pass.match.url}
        </a><br/>
        <a href={import.meta.env.BASE_URL + "nation/" + pass.match.params.id}>
          {import.meta.env.BASE_URL + "nation/" + pass.match.params.id}
        </a> */}

        {seg === "all" && (
          <>
            <IonItemGroup>
              <IonItemDivider>{t("NationDetail.vehicles")}</IonItemDivider>
              <VehiclesList vehicles={vehiclesAll} />
            </IonItemGroup>
            {pageAll > 0 &&
              data.nation.data.attributes.vehicles.data.length <=
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
          </>
        )}
        {seg === "air" && (
          <>
            <IonItemGroup>
              <IonItemDivider>{t("NationDetail.vehicles")}</IonItemDivider>
              <VehiclesList vehicles={vehiclesAir} />
            </IonItemGroup>
            {pageAir > 0 && air.length <= (pageAir + 1) * itemsPerPage && (
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
          </>
        )}
        {seg === "water" && (
          <>
            <IonItemGroup>
              <IonItemDivider>{t("NationDetail.vehicles")}</IonItemDivider>
              <VehiclesList vehicles={vehiclesWater} />
            </IonItemGroup>
            {pageWater > 0 &&
              water.length <= (pageWater + 1) * itemsPerPage && (
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
          </>
        )}
        {seg === "land" && (
          <>
            <IonItemGroup>
              <IonItemDivider>{t("NationDetail.vehicles")}</IonItemDivider>
              <VehiclesList vehicles={vehiclesLand} />
            </IonItemGroup>
            {pageLand > 0 && land.length <= (pageLand + 1) * itemsPerPage && (
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
          </>
        )}

        <IonInfiniteScroll
          ref={infiniteScrollRef}
          threshold="100px"
          disabled={
            (seg === "all" &&
              data.nation.data.attributes.vehicles.data.length <=
                (pageAll + 1) * itemsPerPage) ||
            (seg === "air" && air.length <= (pageAir + 1) * itemsPerPage) ||
            (seg === "water" &&
              water.length <= (pageWater + 1) * itemsPerPage) ||
            (seg === "land" && land.length <= (pageLand + 1) * itemsPerPage)
          }
          onIonInfinite={loadMoreItems}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText={t("InfiniteScroll.loadingtext")}
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default NationDetail;
