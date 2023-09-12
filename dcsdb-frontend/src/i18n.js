import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          App: {
            tab1: "Mods",
            tab2: "Vehicles",
            tab3: "Info",
          },
          Tab1: {
            searchhint: "Search mods",
            blanksearchalert: "Please enter a search term!",
            blanksearchalertclose: "Close",
          },
          Tab2: {
            searchhint: "Search vehicles",
            blanksearchalert: "Please enter a search term!",
            blanksearchalertclose: "Close",
          },
          Tab3: {
            seg1: {
              tabname: "Info",
              appname: "DCSdb",
              cv: "Version",
              lv: "Latest Version",
              devcontact: "Developer Contact",
              github: "Github",
              githubacc: "GP02A",
              bilibili: "Bilibili",
              bilibiliacc: "穆·撒加",
            },
            seg2: {
              tabname: "Progress",
              header: "slowly updating function&data",
              webapp: "Web App",
              androidapp: "Android App",
              iosapp: "iOS App",
              detailinfo: "Detail Info",
              sbc: "Search by category",
            },
            seg3: {
              tabname: "FAQ",
              ch1: "Slow/Fail to load data?",
              cc1: "During early development stage, the backend data server is running on budget VPS.Might switch to a larger VPS if this project is getting more popular, as for now bear with it XD",
              ch2: "Why certain mod/vehicle is not included?",
              cc2: "Both the frontend and backend are maintained by a single developer who is also incharge of data input, so don't expect a fast and complete inclusion at this stage. Mods inclusion will start with popular mods and mods build by those popular developers, at the early stage only vehicle type mods will be included, later other type like utility, environment and so on will the added too.You could also contact developer if you think certain mod should be included right now, in this case you need to provide the offical published page/post of the mod",
              ch3: "When will the IOS App be available?",
              cc3: "The frontend of this project is built with ionic which is an open source mobile UI toolkit for building modern, high quality cross-platform mobile apps from a single code base. So the IOS code is already there, but I currently don't have the time to go through the App Shop listing process......",
            },
          },
          QDBstat: {
            dbstat: "Database Statistics",
            mods: "Mods",
            vehicles: "Vehicles",
          },
          QCmods: {
            noresult: "Can't find any mods with this name",
          },
          QCvehicles: {
            noresult: "Can't find any vehicles with this name",
          },
          ErrorMsg: "Error :(",
          LoadingMsg:{
            p1:"Loading...",
            p2:"If it take forever to load, the server might be offline atm.....ORZ",
          },
          Lists:{
            nation: "Nation",
            developer: "Developer",
            dlc:"DLC",
          },
          Loading:{
            header:"Loading...",
            p1:"Loading...",
            p2:"If it take forever to load, the server might be offline atm.....ORZ",
          },
          Error:{
            header:"Error",
            p1:"Error :(",
          },
          DevDetail:{
            hp:"Home Page",
            mods:"Mods"
          },
          ModDetail:{
            developer:"Developer",
            gamestatus:"Game Status",
            dlc:"DLC",
            nodlc:"none",
            vehicles:"Vehicles",
            infopage:"Info Page",
            dlink:"download links",
          },
          NationDetail:{
            vehicles:"Vehicles",
          },
          VehicleDetail:{
            domain:"Domain",
            origin:"National Origin",
            manufacturers:"Manufacturers",
            mods:"Mods"
          }
        },
      },
    },
  });

export default i18n;
