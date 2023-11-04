import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonAlert,
} from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";
import { useState } from "react";
import Tab2Switcher from "../components/Tab2Switcher";
import "./Tab2.css";
import { useTranslation } from "react-i18next";
import Lngswitcher from "../components/LngSwitcher";

const Tab2 = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchTextPass, setSearchTextPass] = useState("");
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchText !== "") {
              // searchTextPass = searchText;
              setSearchTextPass(searchText);
              // searchIp({ variables: { st: searchText } });
            } else {
              setShowAlert(true);
              setSearchTextPass(searchText);
            }
          }}
        >
          <IonToolbar>
            <IonSearchbar
              value={searchText!}
              onIonInput={(e) => {
                setSearchText(e.detail.value);
              }}
              placeholder={t("Tab2.searchhint")}
              // placeholder="Search mods"
            ></IonSearchbar>
            <IonButton fill="outline" slot="end" type="submit">
              <IonIcon icon={checkmarkOutline} />
            </IonButton>
          </IonToolbar>
        </form>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Tab2Switcher searchTextPass={searchTextPass}></Tab2Switcher>
        <Lngswitcher/>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          // message={"Please enter a search term!"}
          // buttons={["Close"]}
          message={t("Tab1.blanksearchalert")}
          buttons={[t("Tab1.blanksearchalertclose")]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
