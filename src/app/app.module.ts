import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicationComponent } from './components/aplication/aplication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component'
import { AplicationService } from './services/aplication.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from './services/http-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'aplication', component: AplicationComponent},
  { path: 'aplicationDetails', component: ApplicationDetailsComponent },
  {path: '', redirectTo: 'aplication', pathMatch: 'full' }

];
@NgModule({
  declarations: [
    AppComponent,
    AplicationComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:      [],
  providers: [HttpService,
    AplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
