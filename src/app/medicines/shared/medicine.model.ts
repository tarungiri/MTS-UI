import { v4 as uuid } from "uuid";

export interface IMedicine {
  MedicineId: uuid;
  MedicineName: string;
  Brand: string;
  Price: Number;
  Quantity: Number;
  ExpiryDate: Date;
  Notes: string;
}
