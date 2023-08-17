import React from 'react';
import { IonText } from '@ionic/react';

const Error: React.FC = () => {
  return (
    <p className="ion-margin ion-text-center">
      <IonText color="danger">Error :(</IonText>
    </p>
  );
};

export default Error;
