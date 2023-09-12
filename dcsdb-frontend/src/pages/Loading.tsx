import React from 'react';
import { IonContent, IonHeader, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useTranslation } from "react-i18next";

const Loading: React.FC = () => {
  // const [showLoading, setShowLoading] = useState(true);
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('Loading.header')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Loading.header')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-margin ion-text-center">
          <IonText color="secondary">{t('Loading.p1')}</IonText>
        </p>
        <p className="ion-margin ion-text-center">
          <IonText color="medium">{t('Loading.p2')}</IonText>
        </p>
        <IonLoading isOpen={true} message={t('Loading.p1')} duration={5000} />
      </IonContent>
    </IonPage>
  );
};

export default Loading;
