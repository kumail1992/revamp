// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiurl: "https://prod.kheloyar.club",
  //   apiurl: "http://test.sportsbizz.club",
  // apiurl: "http://api.sportsbizz.club",
  // apiurl: "https://preprod.kheloyar.club",
  // apiurl: "https://stage.kheloyar.club",
  // apiurl: "https://newtest.kheloyar.club",
  apiurl: "https://kheloyar.club",
  streamUrl: "https://api.sportsbzz.tv",
  bankPaymentMethod: 5,
  whatsappNumber: "919090717128",
  whatsappNumberBeforeLogin: "918373936518",
  walletCallTimer: 30000,
  firebaseConfig: {
    apiKey: "AIzaSyAlzNH8tozWok-yl-6Fc-t07ylnzq8JPds",
    authDomain: "kynotifications.firebaseapp.com",
    projectId: "kynotifications",
    storageBucket: "kynotifications.appspot.com",
    messagingSenderId: "251348178033",
    appId: "1:251348178033:web:39401dcfcefc81645777d0",
    measurementId: "G-VXQ7SZV0KF"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
