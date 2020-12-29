import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesContentComponent } from './services-content/services-content.component';
import { OrdenarPrecioPipe } from './pipes/ordenar-precio.pipe';
import { RouterLinkActive } from '@angular/router';
import { ForbiddenInputsDirective } from './forbidden-inputs/forbidden-inputs.directive';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './services/servicio.service';
import { AppRoutingModule } from './/app-routing.module';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent,
    ServicesContentComponent,
    OrdenarPrecioPipe,
    ForbiddenInputsDirective,
    ServicioDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'viaja-al-pasdo'),
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})

export class AppModule { }
