import { IonItem, IonLabel, IonChip } from "@ionic/react";
import React from "react";
import { useTranslation } from "react-i18next";

const ModsList = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {props.mods.map(({ id, attributes }) => (
        <IonItem key={id} routerLink={"/mod/" + id}>
          <IonLabel>
            <h3 className="ion-text-wrap">{attributes.name}</h3>
            {attributes.developers && attributes.developers.data.length > 0 && (
              <p>
                {t('Lists.developer')}:&nbsp;
                {attributes.developers.data.map(({ id, attributes }) => (
                  <span key={id}>{attributes.name}&nbsp;</span>
                ))}
              </p>
            )}
            {attributes.dlcs.data.length > 0 && (
              <p>
                {t('Lists.dlc')}:&nbsp;
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
            {attributes.game_status}
          </IonChip>
        </IonItem>
      ))}
    </React.Fragment>
  );
};

export default ModsList;
