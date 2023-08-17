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
} from '@ionic/react';
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import Error from './Error';

const MOD = gql`
query MOD ($id: ID!){
  mod(id: $id) {
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
        vehicles{
          data {
            attributes {
              name
            }
          }
        }
        environments {
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
        <IonList>
          <IonItem>
            {/* <IonThumbnail slot="start">
              {data.ip.Cover === null ? (
                <div>暂缺</div>
              ) : (
                <IonImg src={process.env.REACT_APP_BACKEND + data.ip.Cover.url} />
              )}
            </IonThumbnail> */}
            <IonLabel className="ion-text-wrap">{data.mod.data.attributes.name}</IonLabel>
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

export default ModDetail;
