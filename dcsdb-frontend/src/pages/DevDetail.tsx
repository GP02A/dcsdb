import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import ModsList from "../components/ModsList";

const DEV = gql`
  query DEV($id: ID!) {
    developer(id: $id) {
      data {
        id
        attributes {
          name
          hp
          mods {
            data {
              id
              attributes {
                name
                dlcs {
                  data {
                    id
                    attributes {
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
  const { loading, error, data } = useQuery(DEV, {
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
            Home Page
          </IonButton>
        )}
        <IonItemGroup>
          <IonItemDivider>Mods</IonItemDivider>
          <ModsList mods={data.developer.data.attributes.mods.data} />
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default DevDetail;
