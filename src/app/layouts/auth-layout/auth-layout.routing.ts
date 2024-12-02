import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/login/login.component";
import { RegisterComponent } from "../../pages/register/register.component";
import { NoAuthenticatedGuard } from "src/app/guards/no-authenticated.guard";
// SOLO SE ACTIVA EL LOGIN SI NO ESTÁ LOGUEADO
export const AuthLayoutRoutes: Routes = [
  {
    path: "login",
    canActivate: [NoAuthenticatedGuard],
    component: LoginComponent,
  },
  { path: "register", component: RegisterComponent },
];
