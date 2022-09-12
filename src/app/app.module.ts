import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, reload } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat'
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { HotToastModule } from '@ngneat/hot-toast';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectedComponent } from './connected/connected.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDR4muPQAFtv1VanGnihOYoez7Ei6vowLg",
      authDomain: "hiringappfirebase.firebaseapp.com",
      projectId: "hiringappfirebase",
      storageBucket: "hiringappfirebase.appspot.com",
      messagingSenderId: "886359652501",
      appId: "1:886359652501:web:acb8dfcbdf5581f774c39c",
      measurementId: "G-2BPR8J542B"
    }),
    HotToastModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
