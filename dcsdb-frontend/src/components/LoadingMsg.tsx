import { IonText, IonLoading } from '@ionic/react';
import { useTranslation } from "react-i18next";

const LoadingMsg: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="ion-margin ion-text-center">
        <IonText color="secondary">{t('LoadingMsg.p1')}</IonText>
      </p>
      <p className="ion-margin ion-text-center">
        <IonText color="medium">{t('LoadingMsg.p2')}</IonText>
      </p>
      <IonLoading isOpen={true} message={'Loading...'} duration={5000} />
    </>
  );
};

export default LoadingMsg;
