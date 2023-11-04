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
            note:"Note",
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
      zh: {
        translation: {
          // here we will place our translations...
          App: {
            tab1: "模组",
            tab2: "载具",
            tab3: "信息",
          },
          Tab1: {
            searchhint: "搜索模组",
            blanksearchalert: "请输入模组关键字！",
            blanksearchalertclose: "关闭",
          },
          Tab2: {
            searchhint: "搜索载具",
            blanksearchalert: "请输入载具关键字！",
            blanksearchalertclose: "关闭",
          },
          Tab3: {
            seg1: {
              tabname: "信息",
              appname: "DCSdb",
              cv: "版本",
              lv: "最新版本",
              devcontact: "开发者",
              github: "Github",
              githubacc: "GP02A",
              bilibili: "哔哩哔哩",
              bilibiliacc: "穆·撒加",
            },
            seg2: {
              tabname: "进度",
              header: "功能&数据随缘龟速更新",
              webapp: "网页应用",
              androidapp: "Android应用",
              iosapp: "iOS应用",
              detailinfo: "详细信息",
              sbc: "分类搜索",
            },
            seg3: {
              tabname: "FAQ",
              ch1: "数据载入慢/失败？",
              cc1: "出于成本和开发期便利度的考量，目前项目使用的是海外服务器。根据各地网络状况的不同，可能存在较大的延时，甚至无响应情况。后期视需求及财力可能会转用国内服务器，目前各位就随缘吧XD",
              ch2: "为什么没有收录XX模组？",
              cc2: "由于目前从代码到数据录入，只有拖延症加懒癌晚期的作者一人进行，故收录比较缓慢，目前主要从热门模组及其对应作者的其他模组开始收录。前期将专注于载具，之后会加入其他模组类型。如果你认为特定模组应该被收录，也可以联系开发者提供模组的发布页面。",
              ch3: "IOS应用何时上线？",
              cc3: "项目采用的是全平台通用代码，某种意义上说IOS版已经做好了。然而......开发者并没有能运行Xcode的苹果设备，无法最终调试和发布。目前暂无入手苹果电脑的计划，苹果用户可以先使用网页版，当然有其他更优秀的应用替代更好XD",
            },
          },
          QDBstat: {
            dbstat: "数据库统计",
            mods: "模组",
            vehicles: "载具",
          },
          QCmods: {
            noresult: "未找到相关模组",
          },
          QCvehicles: {
            noresult: "未找到相关载具",
          },
          ErrorMsg: "出错啦 :(",
          LoadingMsg:{
            p1:"加载中...",
            p2:"如若长时间没响应，大概是服务器跑路了ORZ",
          },
          Lists:{
            nation: "国家",
            developer: "开发者",
            dlc:"DLC",
          },
          Loading:{
            header:"加载中...",
            p1:"加载中...",
            p2:"如若长时间没响应，大概是服务器跑路了ORZ",
          },
          Error:{
            header:"出错啦",
            p1:"出错啦 :(",
          },
          DevDetail:{
            hp:"开发者主页",
            mods:"模组"
          },
          ModDetail:{
            developer:"开发者",
            gamestatus:"游戏性",
            dlc:"DLC",
            nodlc:"无",
            note:"备注",
            vehicles:"载具",
            infopage:"模组信息页",
            dlink:"下载链接",
          },
          NationDetail:{
            vehicles:"载具",
          },
          VehicleDetail:{
            domain:"领域",
            origin:"起源国",
            manufacturers:"制造商",
            mods:"模组"
          }
        },
      },
    },
  });

export default i18n;
