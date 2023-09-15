import {
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
  IonList,
  IonItemDivider,
  IonItem,
  IonProgressBar,
  IonNote,
  IonIcon,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import "./Tab3.css";
import { useState } from "react";
import QLatestV from "../queries/QLatestV";
import {
  checkmarkOutline,
  folderOpen,
  hammer,
  languageOutline,
} from "ionicons/icons";
import QDBstat from "../queries/QDBstat";
import { useTranslation } from "react-i18next";

const Tab3 = () => {
  const [seg, setSeg] = useState("info");
  const { t, i18n } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            value={seg}
            // color="secondary"
            onIonChange={(e) => {
              // console.log("Segment selected", e.detail.value);
              setSeg(e.detail.value);
            }}
          >
            <IonSegmentButton value="info">
              <IonLabel>{t("Tab3.seg1.tabname")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="progress">
              <IonLabel>{t("Tab3.seg2.tabname")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="faq">
              <IonLabel>{t("Tab3.seg3.tabname")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {seg === "info" && (
          <>
            <IonList>
              <IonItemDivider color="medium">
                <IonLabel>{t("Tab3.seg1.appname")}</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>{t("Tab3.seg1.cv")}</IonLabel>
                <IonLabel class="ion-text-end">
                  v{import.meta.env.VITE_VERSION}
                </IonLabel>
              </IonItem>
              <QLatestV
                cv={import.meta.env.VITE_VERSION}
                lv={t("Tab3.seg1.lv")}
              />
              <QDBstat />

              <IonItemDivider color="medium">
                <IonLabel>{t("Tab3.seg1.devcontact")}</IonLabel>
              </IonItemDivider>
              <IonItem href="https://github.com/GP02A" target="_blank">
                <IonLabel>{t("Tab3.seg1.githubacc")}</IonLabel>
                <IonLabel class="ion-text-end">
                  {t("Tab3.seg1.github")}
                </IonLabel>
              </IonItem>
              <IonItem
                href="https://space.bilibili.com/32205251"
                target="_blank"
              >
                <IonLabel>{t("Tab3.seg1.bilibiliacc")}</IonLabel>
                <IonLabel class="ion-text-end">
                  {t("Tab3.seg1.bilibili")}
                </IonLabel>
              </IonItem>
            </IonList>
          </>
        )}
        {seg === "progress" && (
          <>
            {/* <div className="ion-margin">slowly updating function&amp;data</div> */}
            <div className="ion-margin">{t("Tab3.seg2.header")}</div>
            <IonProgressBar value={0.1} buffer={0.2}></IonProgressBar>
            <IonList>
              {/* <IonListHeader>
                <IonLabel color="primary">
                  <h2>
                    <strong>进度表：</strong>
                  </h2>
                </IonLabel>
              </IonListHeader> */}
              <IonItem>
                <IonLabel>{t("Tab3.seg2.webapp")}</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>{t("Tab3.seg2.androidapp")}</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>{t("Tab3.seg2.iosapp")}</IonLabel>
                <IonNote slot="end" color="warning">
                  <IonIcon icon={folderOpen}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>{t("Tab3.seg2.detailinfo")}</IonLabel>
                <IonNote slot="end" color="secondary">
                  <IonIcon icon={hammer}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>{t("Tab3.seg2.sbc")}</IonLabel>
                <IonNote slot="end" color="warning">
                  <IonIcon icon={folderOpen}></IonIcon>
                </IonNote>
              </IonItem>
            </IonList>
          </>
        )}

        {seg === "faq" && (
          <>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">{t("Tab3.seg3.ch1")}</div>
              </IonHeader>
              <IonCardContent>
                {t("Tab3.seg3.cc1")}
                {/* <p>
                  During early development stage, the backend data server is
                  running on budget VPS
                </p>
                <div>
                  Might switch to a larger VPS if this project is getting more
                  popular, as for now bear with it XD
                </div> */}
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">{t("Tab3.seg3.ch2")}</div>
              </IonHeader>
              <IonCardContent>
                {t("Tab3.seg3.cc2")}
                {/* <p>
                  Both the frontend and backend are maintained by a single
                  developer who is also incharge of data input, so don't expect
                  a fast and complete inclusion at this stage. Mods inclusion
                  will start with popular mods and mods build by those popular
                  developers, at the early stage only vehicle type mods will be
                  included, later other type like utility, environment and so on
                  will the added too.
                </p>
                <div>
                  You could also contact developer if you think certain mod
                  should be included right now, in this case you need to provide
                  the offical published page/post of the mod
                </div> */}
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">{t("Tab3.seg3.ch3")}</div>
              </IonHeader>
              <IonCardContent>
                {t("Tab3.seg3.cc3")}
                {/* <div>
                  The frontend of this project is built with ionic which is an
                  open source mobile UI toolkit for building modern, high
                  quality cross-platform mobile apps from a single code base. So
                  the IOS code is already there, but I currently don't have the
                  time to go through the App Shop listing process......
                </div> */}
              </IonCardContent>
            </IonCard>
          </>
        )}
        <IonFab slot="fixed" horizontal="end" vertical="bottom">
          <IonFabButton>
            <IonIcon icon={languageOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={() => i18n.changeLanguage("en")}>
              EN
            </IonFabButton>
            <IonFabButton onClick={() => i18n.changeLanguage("zh")}>
              CN
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
