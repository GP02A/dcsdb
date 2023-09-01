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
  IonCardContent
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
              <QDBstat/>

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
            <div className="ion-margin">功能&amp;数据随缘龟速更新中</div>
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
                <IonLabel>网页应用</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>Android应用</IonLabel>
                <IonNote slot="end" color="success">
                  <IonIcon icon={checkmarkOutline}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>IOS应用</IonLabel>
                <IonNote slot="end" color="warning">
                  <IonIcon icon={folderOpen}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>角色&amp;配音信息</IonLabel>
                <IonNote slot="end" color="secondary">
                  <IonIcon icon={hammer}></IonIcon>
                </IonNote>
              </IonItem>
              <IonItem>
                <IonLabel>搜索类型切换</IonLabel>
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
                <div className="ion-padding">为什么数据载入慢/失败？</div>
              </IonHeader>
              <IonCardContent>
                <p>
                  出于成本和开发期便利度的考量，目前项目使用的是海外服务器。根据各地网络状况的不同，可能存在较大的延时，甚至无响应情况。
                </p>
                <div>
                  后期视需求及财力可能会转用国内服务器，目前各位就随缘吧XD
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">为什么没有收录XX作品？</div>
              </IonHeader>
              <IonCardContent>
                <p>
                  项目最终计划收录所有ACGN作品（没看错，轻小说也有）。但由于目前从代码到数据录入，只有拖延症加懒癌晚期的作者一人进行，故收录比较缓慢，范围也暂时局限在中国大陆内有渠道版权的作品上。
                </p>
                <div>有脱发需求的盆友可以联系开发者（笑）</div>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonHeader>
                <div className="ion-padding">IOS应用何时上线？</div>
              </IonHeader>
              <IonCardContent>
                <div>
                  项目采用的是全平台通用代码，某种意义上说IOS版已经做好了。然而......开发者并没有能运行Xcode的苹果设备，无法最终调试和发布。目前暂无入手苹果电脑的计划，苹果用户可以先使用网页版，当然有其他更优秀的应用替代更好XD
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
