import {
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonChip,
} from "@ionic/react";

const ModsList = (props) => {
  return (
    <IonList>
      {props.mods.map(({ id, attributes }) => (
        <IonItem key={id} routerLink={"/mod/" + id}>
          <IonLabel>
            <h3 className="ion-text-wrap">{attributes.name}</h3>

            {attributes.dlcs.data.length === 0 ? null : (
              <p>DLC:&nbsp;
                {attributes.dlcs.data.map(({ id, attributes }) => (
                  <span key={id}>{attributes.name}&nbsp;</span>
                ))}
              </p>
            )}
            {/* {attributes.developers.data.length === 0 ? null : (
              <p>developers:
                {attributes.developers.data.map(({ id, attributes }) => (
                  <span  key={id}>
                    {attributes.name}
                  </span>
                ))}
              </p>
            )} */}
          </IonLabel>
          <IonChip slot="end" class="ion-no-margin" outline={true}>
            {attributes.developers.data.map(({ id, attributes }) => (
              <span key={id}>{attributes.name}</span>
            ))}
          </IonChip>
        </IonItem>
      ))}
    </IonList>
  );
};

export default ModsList;
