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
} from "@ionic/react";
import "./Tab3.css";
import { useState } from "react";
import QLatestV from "../queries/QLatestV";
import { checkmarkOutline, folderOpen, hammer } from "ionicons/icons";
import QDBstat from "../queries/QDBstat";

const Tab3 = () => {
  const [seg, setSeg] = useState("info");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            value={seg}
            // color="secondary"
            onIonChange={(e) => {
              console.log("Segment selected", e.detail.value);
              setSeg(e.detail.value);
            }}
          >
            <IonSegmentButton value="info">
              <IonLabel>Info</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="progress">
              <IonLabel>Progress</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="faq">
              <IonLabel>FAQ</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {seg === "info" && (
          <>
            <IonList>
              <IonItemDivider color="medium">
                <IonLabel>DCSdb</IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonLabel>Version</IonLabel>
                <IonLabel class="ion-text-end">
                  v{import.meta.env.VITE_VERSION}
                </IonLabel>
              </IonItem>
              <QLatestV cv={import.meta.env.VITE_VERSION} />
              <QDBstat />

              <IonItemDivider color="medium">
                <IonLabel>Dev Contact</IonLabel>
              </IonItemDivider>
              <IonItem href="https://github.com/GP02A" target="_blank">
                <IonLabel>GP02A</IonLabel>
                <IonLabel class="ion-text-end">Github</IonLabel>
              </IonItem>
              <IonItem
                href="https://space.bilibili.com/32205251"
                target="_blank"
              >
                <IonLabel>穆·撒加</IonLabel>
                <IonLabel class="ion-text-end">Bilibili</IonLabel>
              </IonItem>
            </IonList>
          </>
        )}
        {seg === "progress" && (
          <>
            <div className="ion-margin">slowly updating function&amp;data</div>
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
                <IonLabel>Web App</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>Android App</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>IOS App</IonLabel>
                <IonNote slot="end" color="warning">
                  <IonIcon icon={folderOpen}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>Vehicles&amp;Mods detail info</IonLabel>
                <IonNote slot="end" color="secondary">
                  <IonIcon icon={hammer}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>Search by category</IonLabel>
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
                <div className="ion-padding">Slow/Fail to load data?</div>
              </IonHeader>
              <IonCardContent>
                <p>
                  During early development stage, the backend data server is
                  running on budget VPS
                </p>
                <div>
                  Might switch to a larger VPS if this project is getting more
                  popular, as for now bear with it XD
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">
                  Why certain mod/vehicle is not included?
                </div>
              </IonHeader>
              <IonCardContent>
                <p>
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
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">
                  When will the IOS App be available?
                </div>
              </IonHeader>
              <IonCardContent>
                <div>
                  The frontend of this project is built with ionic which is an
                  open source mobile UI toolkit for building modern, high
                  quality cross-platform mobile apps from a single code base. So
                  the IOS code is already there, but I currently don't have the
                  time to go through the App Shop listing process......
                </div>
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
