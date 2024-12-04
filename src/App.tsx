import { Redirect, Route } from "react-router-dom";
import {
  IonAlert,
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonTabButton,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./theme/tailwind.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import { albumsOutline, heartSharp } from "ionicons/icons";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import logo from "../public/logo.png";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Products from "./pages/Products";
import WishProducts from "./pages/WishProducts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./components/common/Profile";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/productDetails/:id">
        <ProductDetails />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <IonHeader className="p-4 shadow-sm">
          <IonToolbar>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <IonImg className="w-[160px] h-[140px] -mt-14" src={logo} />
                <IonTitle className="text-sm -mt-12">Tienda Online</IonTitle>
              </div>
              <div className="flex items-center pr-10 gap-2">
                <IonTabButton href="/dashboard/wishProducts">
                  <IonIcon className="w-[24px] h-[24px]" icon={heartSharp} />
                </IonTabButton>
                <IonTabButton href="/dashboard/products">
                  <IonIcon className="w-[24px] h-[24px]" icon={albumsOutline} />
                </IonTabButton>
                <Profile />
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Route path="/dashboard/wishProducts">
            <WishProducts />
          </Route>
          <Route path="/dashboard/products">
            <Products />
          </Route>
        </IonContent>
      </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;
