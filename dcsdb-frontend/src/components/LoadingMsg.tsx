import React from 'react';
import { IonText, IonLoading } from '@ionic/react';

const LoadingMsg: React.FC = () => {
  return (
    <React.Fragment>
      <p className="ion-margin ion-text-center">
        <IonText color="secondary">努力加载中...</IonText>
      </p>
      <p className="ion-margin ion-text-center">
        <IonText color="medium">如若长时间没响应，大概是服务器跑路了ORZ</IonText>
      </p>
      <IonLoading isOpen={true} message={'努力加载中...'} duration={5000} />
    </React.Fragment>
  );
};

export default LoadingMsg;
