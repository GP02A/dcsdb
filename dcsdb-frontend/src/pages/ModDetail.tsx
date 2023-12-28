import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // IonItemDivider,
  IonChip,
  IonList,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonButton,
  IonCardContent,
} from "@ionic/react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import { useTranslation } from "react-i18next";

const MOD = gql`
  query MOD($id: ID!) {
    mod(id: $id) {
      data {
        id
        attributes {
          id: mid
          name
          info_page
          download_links {
            id
            url
            platform {
              data {
                id
                attributes {
                  id: mid
                  name
                }
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
          developers {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          vehicles(pagination: { limit: 50 }, sort: "mid:desc") {
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
          dlcs {
            data {
              id
              attributes {
                id: mid
                name
              }
            }
          }
          note
        }
      }
    }
  }
`;

const ModDetail = (pass) => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(MOD, {
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
          <IonTitle>{data.mod.data.attributes.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{data.mod.data.attributes.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{data.mod.data.attributes.name}</IonCardTitle>
          </IonCardHeader>
          <IonList>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("ModDetail.developer")}:&nbsp;
                {data.mod.data.attributes.developers && data.mod.data.attributes.developers.data.length > 0 &&
                  data.mod.data.attributes.developers.data.map(
                    ({ id, attributes }) => (
                      <IonButton
                        key={id}
                        fill="outline"
                        routerLink={
                          import.meta.env.BASE_URL + "developer/" + id
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attributes.name}
                      </IonButton>
                    )
                  )}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("ModDetail.type")}:&nbsp;
                {data.mod.data.attributes.mod_types.data.map(
                  ({ id, attributes }) => (
                    <IonChip class="ion-no-margin" outline={true} key={id}>
                      {attributes.name}
                    </IonChip>
                  )
                )}
                {/* {data.mod.data.attributes.game_status} */}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                {t("ModDetail.dlc")}:&nbsp;
                {data.mod.data.attributes.dlcs.data.length > 0 ? (
                  data.mod.data.attributes.dlcs.data.map(
                    ({ id, attributes }) => (
                      <IonChip outline={true} key={id}>
                        {attributes.name}
                      </IonChip>
                    )
                  )
                ) : (
                  <span>{t("ModDetail.nodlc")}</span>
                )}
              </IonLabel>
            </IonItem>
            {data.mod.data.attributes.vehicles && data.mod.data.attributes.vehicles.data.length > 0 && (
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  {t("ModDetail.vehicles")}:&nbsp;
                  {data.mod.data.attributes.vehicles.data.map(
                    ({ id, attributes }) => (
                      <IonButton
                        key={id}
                        fill="outline"
                        routerLink={import.meta.env.BASE_URL + "vehicle/" + id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attributes.name}
                      </IonButton>
                    )
                  )}
                </IonLabel>
              </IonItem>
            )}
            {data.mod.data.attributes.note && (
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  {t("ModDetail.note")}:&nbsp;
                  {data.mod.data.attributes.note}
                </IonLabel>
              </IonItem>
            )}
            <IonCard>
              <IonItem
                href={data.mod.data.attributes.info_page}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonLabel>{t("ModDetail.infopage")}</IonLabel>
              </IonItem>
              <IonCardContent>
                <IonLabel className="ion-text-wrap">
                  {t("ModDetail.dlink")}:
                </IonLabel>
                {data.mod.data.attributes.download_links.map(
                  ({ id, url, platform }) => (
                    <IonButton
                      key={id}
                      fill="outline"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.data && platform.data.attributes.name}
                    </IonButton>
                  )
                )}
              </IonCardContent>
            </IonCard>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ModDetail;
