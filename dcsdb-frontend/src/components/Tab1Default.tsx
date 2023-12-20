import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { useState } from "react";
import QAmods from '../queries/QAmods';
import QAmods_drivable from '../queries/QAmods_drivable';
import QAmods_free from '../queries/QAmods_free';
import QAmods_free_drivable from '../queries/QAmods_free_drivable';
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
      >
        <IonSegmentButton value="all">
          <IonLabel>{t('Tab1.all')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="drivable">
          <IonLabel>{t('Tab1.drivable')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="free">
          <IonLabel>{t('Tab1.free')}</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="free_drivable">
          <IonLabel>{t('Tab1.free_drivable')}</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {seg === "all" && <QAmods />}
      {seg === "drivable" && <QAmods_drivable />}
      {seg === "free" && <QAmods_free />}
      {seg === "free_drivable" && <QAmods_free_drivable />}
    </>
  );
};

export default Tab1Default;
