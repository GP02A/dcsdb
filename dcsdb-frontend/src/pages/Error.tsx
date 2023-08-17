import React from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Error: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Error</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Error</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-margin ion-text-center">
          <IonText color="danger">Error :(</IonText>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Error;
