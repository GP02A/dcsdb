import { IonText, IonLoading } from '@ionic/react';

const LoadingMsg: React.FC = () => {
  return (
    <>
      <p className="ion-margin ion-text-center">
        <IonText color="secondary">Loading...</IonText>
      </p>
      <p className="ion-margin ion-text-center">
        <IonText color="medium">If it take forever to load, the server might be offline atm.....ORZ</IonText>
      </p>
      <IonLoading isOpen={true} message={'Loading...'} duration={5000} />
    </>
  );
};

export default LoadingMsg;
