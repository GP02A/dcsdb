import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonList,
  IonItem,
  IonChip,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import { useTranslation } from "react-i18next";

const VEHICLE = gql`
  query VEHICLE($id: ID!) {
    vehicle(id: $id) {
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
              id
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
          mods(pagination: { limit: 50 }, sort: "id:desc") {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          wiki
          variants {
            name
            id
            alias
            mods {
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
          }
        }
      }
    }
  }
`;

const VehicleDetail = (pass) => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(VEHICLE, {
    variables: { id: pass.match.params.id },
  });

  if (loading) return <Loading />;
  // if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  // if (error) return <p>Error :(</p>;
  return (
    <IonPage>
      {/* {console.log(data)} */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>{data.vehicle.data.attributes.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {data.vehicle.data.attributes.name}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {data.vehicle.data.attributes.cover.data === null ? null : (
            <IonImg
              src={
                import.meta.env.VITE_BACKEND +
                data.vehicle.data.attributes.cover.data.attributes.url
              }
            />
          )}
          <IonCardHeader>
            <IonCardTitle>{data.vehicle.data.attributes.name}</IonCardTitle>
            <IonCardSubtitle>
              {data.vehicle.data.attributes.alias}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonList>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("VehicleDetail.domain")}:&nbsp;
                {data.vehicle.data.attributes.vehicle_domains.data.length > 0 &&
                  data.vehicle.data.attributes.vehicle_domains.data.map(
                    ({ id, attributes }) => (
                      <IonChip outline={true} key={id}>
                        {attributes.name}
                      </IonChip>
                    )
                  )}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("VehicleDetail.origin")}:&nbsp;
                {data.vehicle.data.attributes.national_origin.data.length > 0 &&
                  data.vehicle.data.attributes.national_origin.data.map(
                    ({ id, attributes }) => (
                      <IonButton
                        key={id}
                        fill="outline"
                        routerLink={import.meta.env.BASE_URL + "nation/" + id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attributes.displayname}
                      </IonButton>
                    )
                  )}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("VehicleDetail.manufacturers")}:&nbsp;
                {data.vehicle.data.attributes.manufacturers.data.length > 0 &&
                  data.vehicle.data.attributes.manufacturers.data.map(
                    ({ id, attributes }) => (
                      <span key={id}>{attributes.name}&nbsp;</span>
                    )
                  )}
              </IonLabel>
            </IonItem>
            {/* only show mod when no variants exist */}
            {data.vehicle.data.attributes.variants.length === 0 ? (
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  {t("VehicleDetail.mods")}:&nbsp;
                  {data.vehicle.data.attributes.mods.data.length > 0 &&
                    data.vehicle.data.attributes.mods.data.map(
                      ({ id, attributes }) => (
                        <IonButton
                          key={id}
                          fill="outline"
                          routerLink={import.meta.env.BASE_URL + "mod/" + id}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {attributes.name}
                        </IonButton>
                      )
                    )}
                </IonLabel>
              </IonItem>
            ) : (
              <React.Fragment>
                {data.vehicle.data.attributes.variants.map(
                  ({ id, name, mods }) => (
                    <IonCard key={id}>
                      <IonItem>
                        <IonLabel>{name}</IonLabel>
                      </IonItem>
                      {mods.data.length > 0 && (
                        <IonCardContent>
                          <IonLabel className="ion-text-wrap">
                            {t("VehicleDetail.mods")}:&nbsp;
                          </IonLabel>
                          {mods.data.map(({ id, attributes }) => (
                            <IonButton
                              key={id}
                              fill="outline"
                              routerLink={
                                import.meta.env.BASE_URL + "mod/" + id
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {attributes.name}
                            </IonButton>
                          ))}
                        </IonCardContent>
                      )}
                    </IonCard>
                  )
                )}
              </React.Fragment>
            )}
          </IonList>
        </IonCard>
        {data.vehicle.data.attributes.wiki && (
          <IonButton
            expand="block"
            href={data.vehicle.data.attributes.wiki}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("VehicleDetail.wiki")}
          </IonButton>
        )}
        {/* <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              {data.vehicle.data.attributes.cover.data === null ? (
                <div>暂缺</div>
              ) : (
                <IonImg
                  src={
                    import.meta.env.VITE_BACKEND +
                    data.vehicle.data.attributes.cover.data.attributes.url
                  }
                />
              )}
            </IonThumbnail>
            <IonLabel className="ion-text-wrap">
              {data.vehicle.data.attributes.name}
            </IonLabel>
          </IonItem>
          <IonItemDivider>
            <IonLabel>简介：</IonLabel>
          </IonItemDivider>
          <IonItem>
            <div>{data.ip.Description}</div>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default VehicleDetail;
