import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainContentComponent } from './main-content/main-content.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesContentComponent } from './services-content/services-content.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';

const routes: Routes = [
  { path: 'inicio', component: MainContentComponent},
  { path: 'nosotras', component: AboutUsComponent},
  { path: 'contacte', component: ContactComponent},
  { path: 'servicios/:id', component: ServicioDetailComponent},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full'}
] ;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
