import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({
    "projectId":"myportfolio-22b6b",
    "appId":"1:740358850596:web:9c64ac32ddbe266f",
    "databaseURL":"https://myportfolio-22b6b.firebaseio.com",
    "storageBucket":"myportfolio-22b6b.appspot.com",
    "apiKey":"AIzaSyDUOVSClzzWdNY8l8u9w0S60SC7_3_19Is",
    "authDomain":"myportfolio-22b6b.firebaseapp.com",
    "messagingSenderId":"740358850596"})))
    , importProvidersFrom(provideAuth(() => getAuth()))
    , importProvidersFrom(provideFirestore(() => getFirestore()))
    , importProvidersFrom(provideDatabase(() => getDatabase()))]
};
