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
import { ApolloClient, InMemoryCache, ApolloProvider ,createHttpLink,} from "@apollo/client";
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

import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APOLLO_CLIENT,
});
const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  // uri: 'http://localhost:1337/graphql',
  // uri: import.meta.env.VITE_APOLLO_CLIENT,
  link: authLink.concat(httpLink),
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
              <Route exact path={import.meta.env.BASE_URL + "tab1"}>
                <Tab1 />
              </Route>
              <Route exact path={import.meta.env.BASE_URL + "tab2"}>
                <Tab2 />
              </Route>
              <Route exact path={import.meta.env.BASE_URL + "tab3"}>
                <Tab3 />
              </Route>
              <Route path={import.meta.env.BASE_URL + "mod/:id"} component={ModDetail} />
              <Route path={import.meta.env.BASE_URL + "vehicle/:id"} component={VehicleDetail} />
              <Route path={import.meta.env.BASE_URL + "developer/:id"} component={DevDetail} />
              <Route path={import.meta.env.BASE_URL + "nation/:id"} component={NationDetail} />
              <Route exact path={import.meta.env.BASE_URL}>
                <Redirect to={import.meta.env.BASE_URL + "tab1"} />
              </Route>
              <Route>
                <Redirect to={import.meta.env.BASE_URL + "tab1"} />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href={import.meta.env.BASE_URL + "tab1"}>
                <IonIcon aria-hidden="true" icon={gameControllerOutline} />
                <IonLabel>{t("App.tab1")}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href={import.meta.env.BASE_URL + "tab2"}>
                <IonIcon aria-hidden="true" icon={airplaneOutline} />
                <IonLabel>{t("App.tab2")}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href={import.meta.env.BASE_URL + "tab3"}>
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
