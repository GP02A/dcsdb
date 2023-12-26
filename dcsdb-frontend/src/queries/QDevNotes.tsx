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
import { useTranslation } from "react-i18next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const DN = gql`
  query DN($lng: I18NLocaleCode) {
    appInfo(locale: $lng) {
      data {
        id
        attributes {
          id: mid
          DevNotes(pagination: { limit: 10 }, sort: "id:desc") {
            id
            title
            content
          }
        }
      }
    }
  }
`;

const QDevNotes = () => {
  const { i18n } = useTranslation();
  const { loading, error, data } = useQuery(DN, {
    variables: { lng: i18n.resolvedLanguage },
  });

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  return (
    <IonList>
      {data.appInfo.data.attributes.DevNotes.map(({ title, id, content }) => (
        <IonCard key={id}>
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BlocksRenderer content={content} />
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};

export default QDevNotes;
