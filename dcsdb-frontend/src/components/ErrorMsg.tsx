// import React from 'react';
import { IonText } from '@ionic/react';
import { useTranslation } from "react-i18next";

const ErrorMsg = () => {
  const { t } = useTranslation();
  return (
    <p className="ion-margin ion-text-center">
      <IonText color="danger">{t('ErrorMsg')}</IonText>
    </p>
  );
};

export default ErrorMsg;
