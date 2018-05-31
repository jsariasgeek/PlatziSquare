// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAcOOV2ZZ6rOHSFVG3RNCWr6RyXml29Smc",
    authDomain: "platzi-square-repeat.firebaseapp.com",
    databaseURL: "https://platzi-square-repeat.firebaseio.com",
    projectId: "platzi-square-repeat",
    storageBucket: "",
    messagingSenderId: "991105488842"
  },
  googleMapsApiKey:"AIzaSyADTwwIq2uhGguaE7fIn8A3UE_hXegGav0",
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
