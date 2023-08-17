import { IonImg, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const ModsList = (props) => {
  return (
    <IonList>
      {props.mods.map(({ id , attributes}) => (
        <IonItem key={id} routerLink={'mod/' + id}>
          {/* <IonThumbnail slot="start">
            {Cover === null ? <div>暂缺</div> : <IonImg src={process.env.REACT_APP_BACKEND + Cover.url} />}
          </IonThumbnail> */}

          <IonLabel className="ion-text-wrap">{attributes.name}</IonLabel>
          <IonLabel className="ion-text-wrap">{attributes.developers.data.map(({id, attributes})=>(<span key={id}>{attributes.name}</span>))}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default ModsList;
