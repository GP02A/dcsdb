import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { useState } from "react";
import QAvehicles from '../queries/QAvehicles';
import QAvehicles_air from '../queries/QAvehicles_air';
import QAvehicles_water from '../queries/QAvehicles_water';
import QAvehicles_land from '../queries/QAvehicles_land';
import { useTranslation } from "react-i18next";

const Tab1Default = () => {
  const [seg, setSeg] = useState("all");
  const { t } = useTranslation();
  return (
    <>
      <IonSegment
        value={seg}
        onIonChange={(e) => {
          setSeg(e.detail.value.toString());
        }}
        scrollable={true}
      >
        <IonSegmentButton value="all">
          <IonLabel>{t('Tab2.all')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="air">
          <IonLabel>{t('Tab2.air')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="water">
          <IonLabel>{t('Tab2.water')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="land">
          <IonLabel>{t('Tab2.land')}</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {seg === "all" && <QAvehicles />}
      {seg === "air" && <QAvehicles_air />}
      {seg === "water" && <QAvehicles_water />}
      {seg === "land" && <QAvehicles_land />}
    </>
  );
};

export default Tab1Default;
