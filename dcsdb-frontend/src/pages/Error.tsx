import React from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useTranslation } from "react-i18next";

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('Error.header')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Error.header')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-margin ion-text-center">
          <IonText color="danger">{t('Error.p1')}</IonText>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Error;
