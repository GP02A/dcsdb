import { IonText, IonLoading } from "@ionic/react";
// import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LoadingMsg = () => {
  const { t } = useTranslation();
  // const [showSpin, setShowSpin] = useState(true);
  // useEffect(() => {
  //   // Anything in here is fired on component mount.
  //   return () => {
  //     // Anything in here is fired on component unmount.
  //     console.log("unmounted");
  //     setShowSpin(false);
  //   };
  // }, []);
  return (
    <>
      <p className="ion-margin ion-text-center">
        <IonText color="secondary">{t("LoadingMsg.p1")}</IonText>
      </p>
      <p className="ion-margin ion-text-center">
        <IonText color="medium">{t("LoadingMsg.p2")}</IonText>
      </p>
      <IonLoading isOpen={true} message={t("LoadingMsg.p1")}  />
    </>
  );
};

export default LoadingMsg;
