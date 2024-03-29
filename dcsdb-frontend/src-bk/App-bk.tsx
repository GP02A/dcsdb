import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  informationCircleOutline,
  airplaneOutline,
  gameControllerOutline,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import ModDetail from "./pages/ModDetail";
import DevDetail from "./pages/DevDetail";
import VehicleDetail from "./pages/VehicleDetail";
import NationDetail from "./pages/NationDetail";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useTranslation } from "react-i18next";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const client = new ApolloClient({
  // uri: 'http://localhost:1337/graphql',
  uri: import.meta.env.VITE_APOLLO_CLIENT,
  cache: new InMemoryCache(),
});

setupIonicReact();

const App = () => {
  const { t } = useTranslation();
  return (
    <IonApp>
      <ApolloProvider client={client}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tab1">
                <Tab1 />
              </Route>
              <Route exact path="/tab2">
                <Tab2 />
              </Route>
              <Route path="/tab3">
                <Tab3 />
              </Route>
              <Route path="/mod/:id" component={ModDetail} />
              <Route path="/vehicle/:id" component={VehicleDetail} />
              <Route path="/developer/:id" component={DevDetail} />
              <Route path="/nation/:id" component={NationDetail} />
              <Route exact path="/">
                <Redirect to="/tab1" />
              </Route>
              <Route>
                <Redirect to="/tab1" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon aria-hidden="true" icon={gameControllerOutline} />
                <IonLabel>{t("App.tab1")}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon aria-hidden="true" icon={airplaneOutline} />
                <IonLabel>{t("App.tab2")}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon aria-hidden="true" icon={informationCircleOutline} />
                <IonLabel>{t("App.tab3")}</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </ApolloProvider>
    </IonApp>
  );
};

export default App;
