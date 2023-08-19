import {
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonChip,
} from "@ionic/react";

const vehiclesList = (props) => {
  return (
    <IonList>
      {props.vehicles.map(({ id, attributes }) => (
        <IonItem key={id} routerLink={"/vehicle/" + id}>
          <IonThumbnail slot="start">
            {attributes.cover === null ? (
              <div>暂缺</div>
            ) : (
              <IonImg
                src={
                  import.meta.env.VITE_BACKEND +
                  attributes.cover.data.attributes.url
                }
              />
            )}
          </IonThumbnail>
          <IonLabel className="ion-text-wrap">
            <h3>{attributes.name}</h3>
            {attributes.national_origin.data.length === 0 ? null : (
              <p>national:
                {attributes.national_origin.data.map(({ id, attributes }) => (
                  <IonChip outline={true} key={id}>
                    {attributes.displayname}
                  </IonChip>
                ))}
              </p>
            )}
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default vehiclesList;
