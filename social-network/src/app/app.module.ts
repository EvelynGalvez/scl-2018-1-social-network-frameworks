import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WelcomeComponent } from './welcome/welcome.component';
import { PublishComponent } from './publish/publish.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthFormComponent,
    WelcomeComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
