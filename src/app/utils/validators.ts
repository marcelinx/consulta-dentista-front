import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRegex = /^[A-Z][a-zA-Z ]*$/;
    const valid = nameRegex.test(control.value);
    return valid ? null : { invalidName: true };
  };
}

export function dataNascimentoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const valid = dateRegex.test(control.value);
    return valid ? null : { invalidDate: true };
  };
}

export function telefoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    const valid = phoneRegex.test(control.value);
    return valid ? null : { invalidPhone: true };
  };
}
