import { IonIcon, IonFab, IonFabButton, IonFabList } from "@ionic/react";
import { languageOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

const Lngswitcher = () => {
  const { i18n } = useTranslation();
  return (
    <IonFab slot="fixed" horizontal="end" vertical="bottom">
      <IonFabButton>
        <IonIcon icon={languageOutline}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton
          color={i18n.resolvedLanguage === "en" ? "primary" : ""}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </IonFabButton>
        <IonFabButton
          color={i18n.resolvedLanguage === "zh" ? "primary" : ""}
          onClick={() => i18n.changeLanguage("zh")}
        >
          CN
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default Lngswitcher;
