import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar, IonButton, IonIcon, IonAlert, IonProgressBar } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import { useState } from 'react';
import Tab1Switcher from '../components/Tab1Switcher';
import './Tab1.css';

const Tab1 = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchTextPass, setSearchTextPass] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchText !== '') {
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
                // setShowAll(true);
              }}
              placeholder="搜索"
              // onIonClear={() => {
              //   console.log('clear');
              // }}
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
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          // header={'Alert'}
          // subHeader={'Subtitle'}
          message={'请输入搜索内容！！！'}
          buttons={['关闭']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
