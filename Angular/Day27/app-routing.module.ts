import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
      {
        path:"",redirectTo:"/login",pathMatch:"full"
      },
      {
        path:"login",component:LoginComponent
      },
      {
        path:"home",component:HomeComponent,canActivate:[AuthGuard]
      },
      {
        path:"addEmployee",component:AddemployeeComponent,canActivate:[AuthGuard]
      },
      {
        path:"**",component:NotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
