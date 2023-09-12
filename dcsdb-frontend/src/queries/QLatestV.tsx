import { useQuery, gql } from '@apollo/client';
import LoadingMsg from '../components/LoadingMsg';
import ErrorMsg from '../components/ErrorMsg';
import { IonItem, IonLabel } from '@ionic/react';

const LV = gql`
  query LV {
    appInfo{
      data{
        id
        attributes{
          LatestVersion
          LVLink
        }
      }
    }
  }
`;

const QLatestV = (props) => {
  const { loading, error, data } = useQuery(LV);

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  // console.log(data);
  return (
    <>
      {props.cv !== data.appInfo.data.attributes.LatestVersion && (
        <IonItem href={'https://' + data.appInfo.data.attributes.LVLink} target="_blank">
          <IonLabel>{props.lv}</IonLabel>
          <IonLabel class="ion-text-end">v{data.appInfo.data.attributes.LatestVersion}</IonLabel>
        </IonItem>
      )}
    </>
    // <React.Fragment>
    //   <IpsList ips={data.homePage.ips} />
    // </React.Fragment>
  );
};

export default QLatestV;
