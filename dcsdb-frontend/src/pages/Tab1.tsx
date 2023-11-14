import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar, IonButton, IonIcon, IonAlert } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import { useState } from 'react';
import Tab1Switcher from '../components/Tab1Switcher';
import './Tab1.css';
import { useTranslation } from "react-i18next";
import Lngswitcher from '../components/LngSwitcher';

const Tab1 = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchTextPass, setSearchTextPass] = useState('');
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchText !== '') {
              setSearchTextPass(searchText);
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
              placeholder={t('Tab1.searchhint')}
            ></IonSearchbar>
            <IonButton
              fill="outline"
              slot="end"
              type='submit'
            >
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
        <Tab1Switcher searchTextPass={searchTextPass}></Tab1Switcher>
        <Lngswitcher/>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          message={t('Tab1.blanksearchalert')}
          buttons={[t('Tab1.blanksearchalertclose')]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
