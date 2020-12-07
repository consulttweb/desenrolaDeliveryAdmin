// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC4s7dIpPWhLnALV5EqVxhtApICIxRBW28',
    authDomain: 'desenroladelivery.firebaseapp.com',
    projectId: 'desenroladelivery',
    storageBucket: 'desenroladelivery.appspot.com',
    messagingSenderId: '890029439587',
    appId: '1:890029439587:web:b7f8fe3876d8bb7f8bd656',
    measurementId: ''
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
