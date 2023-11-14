import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";
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
          vehicles (pagination: { limit: 50 }, sort: "id:desc") {
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
  const { loading, error, data } = useQuery(NATION, {
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
          <IonTitle>{data.nation.data.attributes.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{data.nation.data.attributes.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItemGroup>
          <IonItemDivider>{t('NationDetail.vehicles')}</IonItemDivider>
          <VehiclesList vehicles={data.nation.data.attributes.vehicles.data} />
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default NationDetail;
