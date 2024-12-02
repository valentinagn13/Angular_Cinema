import { Routes } from "@angular/router";
//*TORRE PRINCIPAR DE RUTAS DEL PROYECTO :SI ACTIVA ... SE HABRE EL LINK ...
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AuthenticatedGuard } from "src/app/guards/authenticated.guard";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  {
    path: "theaters", //*CUANDO SE PONGA TEATROS ACTIVAR... REDIRIGIR A OTRA TORRE DE CONTROL
    canActivate: [AuthenticatedGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/pages/theaters/theaters.module").then(
            (m) => m.TheatersModule
          ),
      },
    ],
  },
  {
    path: "seats", //*CUANDO SE PONGA sillar ACTIVAR... REDIRIGIR A OTRA TORRE DE CONTROL
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/pages/seats/seats.module").then((m) => m.SeatsModule),
      },
    ],
  },
];
