import { Pipe, PipeTransform } from '@angular/core';
import { UserAddress } from '../interfaces/user';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(value: UserAddress): unknown {
    return value.street+", "+ ((value.suite)? value.suite+',':'') +value.city+','+value.zipcode;
  }

}
