import { NgModule, Component } from "@angular/core";
import { MedicineListComponent } from "../medicines/medicine-list/medicine-list.component";
import { Routes, RouterModule } from "@angular/router";
import { MedicineComponent } from "../medicines/medicine/medicine.component";
import { MedicineService } from "../medicines/shared/medicine.service";
import { MedicineFilterPipe } from "../medicines/shared/medicine-filter.pipe";
import { SharedModule } from "../shared/shared.module";
import { MedicineDetailComponent } from "./medicine-detail/medicine-detail.component";

const appProductRoutes: Routes = [
  {
    path: "medicines",
    children: [
      {
        path: "",
        component: MedicineListComponent
      },
      {
        path: "Add",
        component: MedicineComponent
      },
      {
        path: ":id",
        component: MedicineDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(appProductRoutes)],
  declarations: [
    MedicineListComponent,
    MedicineComponent,
    MedicineDetailComponent,
    MedicineFilterPipe
  ],
  providers: [MedicineService]
})
export class MedicineModule {}
