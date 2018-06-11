import { Pipe, PipeTransform } from '@angular/core';
import { IMedicine } from './medicine.model';

@Pipe({
    name: 'medicineFilter'
})
export class MedicineFilterPipe implements PipeTransform {

    transform(value: IMedicine[], filterBy: string): IMedicine[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((medicine: IMedicine) =>
            medicine.MedicineName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

    }
}
