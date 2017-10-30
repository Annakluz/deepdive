import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path:'', component: AppComponent},
  {path:'login', component: AppComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyD0bHZWvGGK_Votp7OZDNdrxcck5gJoyoI",
  authDomain: "deepdive-1cc1b.firebaseapp.com",
  databaseURL: "https://deepdive-1cc1b.firebaseio.com",
  storageBucket: "deepdive-1cc1b.appspot.com",
  messagingSenderId:"1037549860489"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
