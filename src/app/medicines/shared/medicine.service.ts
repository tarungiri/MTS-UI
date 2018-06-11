import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IMedicine } from "./medicine.model";

const MTSAPIUrl: string = "http://localhost:58168/api/";

@Injectable()
export class MedicineService {
  constructor(private http: HttpClient) {}

  getAllMedicines(): Observable<any> {
    let medicines = this.http.get(MTSAPIUrl + "Medicine");
    return medicines;
  }

  getMedicineById(medicineId): Observable<any> {
    let medicine = this.http.get(
      MTSAPIUrl + "Medicine/GetMedicine?id=" + medicineId
    );
    return medicine;
  }
}
