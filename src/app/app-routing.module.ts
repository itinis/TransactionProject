import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './components/aplication/aplication.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

const routes: Routes = [
  {path:'aplication', component: AplicationComponent},
  { path: 'aplicationDetails', component: ApplicationDetailsComponent },
  {path: '', redirectTo: 'aplication', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
