import {
  IonImg,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonChip,
} from "@ionic/react";
import React from "react";
import { useTranslation } from "react-i18next";

const vehiclesList = (props) => {
  const { t,i18n } = useTranslation();
  return (
    <React.Fragment>
      {props.vehicles.map(({ id, attributes }) => (
        <IonItem key={id} routerLink={import.meta.env.BASE_URL + "vehicle/" + id}>
          <IonThumbnail slot="start">
            {attributes.cover === null ? (
              <div>NA</div>
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
            <h3>{i18n.resolvedLanguage === "zh"
              ? attributes.name
              : attributes.name}</h3>
            {attributes.national_origin && attributes.national_origin.data.length > 0 && (
              <p>
                {t('Lists.nation')}:&nbsp;
                {attributes.national_origin.data.map(({ id, attributes }) => (
                  <IonChip outline={true} key={id}>{attributes.displayname}&nbsp;</IonChip>
                ))}
              </p>
            )}
            {/* {attributes.national_origin.data.length === 0 ? null : (
              <p>national:
                {attributes.national_origin.data.map(({ id, attributes }) => (
                  <IonChip outline={true} key={id}>
                    {attributes.displayname}
                  </IonChip>
                ))}
              </p>
            )} */}
          </IonLabel>
        </IonItem>
      ))}
    </React.Fragment>
  );
};

export default vehiclesList;
