import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // IonItemDivider,
  IonImg,
  IonThumbnail,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";

const VEHICLE = gql`
  query VEHICLE($id: ID!) {
    vehicle(id: $id) {
      data {
        id
        attributes {
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
              attributes {
                name
              }
            }
          }
          manufacturers {
            data {
              attributes {
                name
              }
            }
          }
          vehicle_domains {
            data {
              attributes {
                name
              }
            }
          }
          mods {
            data {
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

const VehicleDetail = (pass) => {
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
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              {data.vehicle.data.attributes.cover === null ? (
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
          {/* <IonItemDivider>
            <IonLabel>简介：</IonLabel>
          </IonItemDivider>
          <IonItem>
            <div>{data.ip.Description}</div>
          </IonItem> */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default VehicleDetail;
