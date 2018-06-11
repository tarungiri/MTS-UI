import { Component, OnInit } from "@angular/core";
import { MedicineService } from "../shared/medicine.service";
import { IMedicine } from "../shared/medicine.model";

@Component({
  selector: "app-medicine-list",
  templateUrl: "./medicine-list.component.html"
})
export class MedicineListComponent implements OnInit {
  pageTitle: string = "Medicine List";
  listFilter: string;
  medicines: IMedicine[];

  constructor(private medicineSvc: MedicineService) {}

  ngOnInit() {
    this.medicineSvc.getAllMedicines().subscribe(
      data => {
        this.medicines = data;
      },
      err => alert(err)
    );
  }

  CalculateExpiryDays(expiryDate: string) {
    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(expiryDate);
    var currentDay = new Date();

    var diffDays = Math.round(
      Math.abs((firstDate.getTime() - currentDay.getTime()) / oneDay)
    );
    return diffDays;
  }
}
