import { useQuery, gql } from "@apollo/client";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";
import { IonItemDivider, IonItem, IonLabel } from "@ionic/react";

const DBstat = gql`
  query DBstat {
    vehicles {
      meta {
        pagination {
          total
        }
      }
    }
    mods {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

const QDBstat = () => {
  const { loading, error, data } = useQuery(DBstat);

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  // console.log(data);
  return (
    <>
      <IonItemDivider color="medium">
        <IonLabel>Database Statistics</IonLabel>
      </IonItemDivider>
      <IonItem>
        <IonLabel>Mods:</IonLabel>
        <IonLabel class="ion-text-end">
          {data.mods.meta.pagination.total}
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Vehicles:</IonLabel>
        <IonLabel class="ion-text-end">
          {data.vehicles.meta.pagination.total}
        </IonLabel>
      </IonItem>
    </>
    // <React.Fragment>
    //   <IpsList ips={data.homePage.ips} />
    // </React.Fragment>
  );
};

export default QDBstat;
