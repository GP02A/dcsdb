import React from 'react';
import { IonContent, IonHeader, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Loading: React.FC = () => {
  // const [showLoading, setShowLoading] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">加载中...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-margin ion-text-center">
          <IonText color="secondary">努力加载中...</IonText>
        </p>
        <p className="ion-margin ion-text-center">
          <IonText color="medium">如若长时间没响应，大概是服务器跑路了ORZ</IonText>
        </p>
        <IonLoading isOpen={true} message={'努力加载中...'} duration={5000} />
      </IonContent>
    </IonPage>
  );
};

export default Loading;
