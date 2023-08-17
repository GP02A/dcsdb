import { IonImg, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const vehiclesList = (props) => {
  return (
    <IonList>
      {props.vehicles.map(({ id , attributes}) => (
        <IonItem key={id} routerLink={'vehicle/' + id}>
          <IonThumbnail slot="start">
            {attributes.cover === null ? <div>暂缺</div> : <IonImg src={import.meta.env.VITE_BACKEND + attributes.cover.data.attributes.url} />}
          </IonThumbnail>

          <IonLabel className="ion-text-wrap">{attributes.name}</IonLabel>
          <IonLabel className="ion-text-wrap">{attributes.national_origin.data.map(({id, attributes})=>(<span key={id}>{attributes.name}</span>))}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default vehiclesList;
