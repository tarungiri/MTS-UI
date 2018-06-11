import { Component, OnInit } from "@angular/core";
import { MedicineService } from "../shared/medicine.service";
import { IMedicine } from "../shared/medicine.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-medicine-detail",
  templateUrl: "./medicine-detail.component.html"
})
export class MedicineDetailComponent implements OnInit {
  medicine: IMedicine;
  medId: string;

  constructor(
    private route: ActivatedRoute,
    private medicineSvc: MedicineService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.medId = params["id"];
    });

    this.medicineSvc.getMedicineById(this.medId).subscribe(
      data => {
        this.medicine = data;
      },
      err => alert(err)
    );
  }
}
