import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistritsComponent } from './components/distrits/distrits.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AddDistrictComponent } from './components/add-district/add-district.component';
const routes: Routes = [
  {path: "iftar/login",component: LoginComponent},
  {path: "iftar/districts",component: DistritsComponent,canActivate: [AuthGuard]},
  {path: "iftar/addDistict",component: AddDistrictComponent,canActivate: [AuthGuard]},
 
{path: "iftar", redirectTo : "iftar/districts", pathMatch: 'full'},
{path: "", redirectTo : "iftar/districts", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
