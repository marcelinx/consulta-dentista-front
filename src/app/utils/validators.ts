import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const regex = /^[A-Za-z ]+$/;
    const valid = regex.test(control.value);
    return valid ? null : { invalidName: { value: control.value } };
  };
}
