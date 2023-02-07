import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", loadChildren: () => import("./components/login/login.module").then(module => module.LoginModule) },
  { path: "dashboard", loadChildren: () =>  import("./components/dashboard/dashboard.module").then(module => module.DashboardModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
