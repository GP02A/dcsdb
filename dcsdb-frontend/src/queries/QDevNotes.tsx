import { useQuery, gql } from "@apollo/client";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import {
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

const DN = gql`
  query DN {
    appInfo {
      data {
        id
        attributes {
            LatestVersion
          DevNotes {
            id
            title
            body
          }
        }
      }
    }
  }
`;

const QDevNotes = () => {
  const { loading, error, data } = useQuery(DN);

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <IonList>
      {data.appInfo.data.attributes.DevNotes.map(({ title, body, id }) => (
        <IonCard key={id}>
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{body}</IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};

export default QDevNotes;
