import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TheatersRoutingModule } from "./theaters-routing.module";
import { ManageComponent } from "./manage/manage.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    TheatersRoutingModule,
    FormsModule,
    ReactiveFormsModule, //! IMPORTACION NECESARIA PARA QUE FUNCIONE LA COMINICACIÓN BI DIRECCIONAL
  ],
})
export class TheatersModule {}
