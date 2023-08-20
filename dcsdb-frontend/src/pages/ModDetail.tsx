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

const MOD = gql`
  query MOD($id: ID!) {
    mod(id: $id) {
      data {
        id
        attributes {
          name
          info_page
          download_links {
            id
            url
            platform {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
          game_status
          developers {
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
          dlcs {
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

const ModDetail = (pass) => {
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
                developers:
                {data.mod.data.attributes.developers.data.length > 0 &&
                  data.mod.data.attributes.developers.data.map(
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
                game status:&nbsp;{data.mod.data.attributes.game_status}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                DLCs:&nbsp;
                {data.mod.data.attributes.dlcs.data.length > 0 ? (
                  data.mod.data.attributes.dlcs.data.map(
                    ({ id, attributes }) => (
                      <IonChip outline={true} key={id}>
                        {attributes.name}
                      </IonChip>
                    )
                  )
                ) : (
                  <span>none</span>
                )}
              </IonLabel>
            </IonItem>
            {data.mod.data.attributes.vehicles.data.length > 0 && (
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  vehicles:&nbsp;
                  {data.mod.data.attributes.vehicles.data.map(
                    ({ id, attributes }) => (
                      <IonButton
                        key={id}
                        fill="outline"
                        routerLink={"/vehicle/" + id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attributes.name}&nbsp;
                      </IonButton>
                    )
                  )}
                </IonLabel>
              </IonItem>
            )}
            <IonCard>
              <IonItem
                href={data.mod.data.attributes.info_page}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonLabel>Info Page</IonLabel>
              </IonItem>
              <IonCardContent>
                <IonLabel className="ion-text-wrap">downlod links:</IonLabel>
                {data.mod.data.attributes.download_links.map(
                  ({ id, url, platform }) => (
                    <IonButton
                      key={id}
                      fill="outline"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.data.attributes.name}
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
