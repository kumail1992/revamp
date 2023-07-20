import { ElementRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime, map, of, switchMap } from 'rxjs';

export function confirmValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors?.['confirmValidator']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function validateAllFormFields(formGroup: FormGroup, el?: ElementRef) {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control, el);
    }
  });
  if (el) {
    for (const key of Object.keys(formGroup.controls)) {
      if (formGroup.controls[key].invalid) {
        const invalidControl = el.nativeElement.querySelector(
          '[formcontrolname="' + key + '"]'
        );
        invalidControl.focus();
        break;
      }
    }
  }
}

export const emailRegex = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$`;

export function objectToFormData(obj: Record<any, any>, formData?: FormData, parentKey?: string) {
  if (typeof formData === 'undefined') {
    formData = new FormData();
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const propName = parentKey ? `${parentKey}[${key}]` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !(obj[key] instanceof File)) {
        objectToFormData(obj[key], formData, propName);
      } else {
        formData.append(propName, obj[key]);
      }
    }
  }

  return formData;
}

export function conditionalRequiredValidator(login_id: string, transaction_key: string, gateway: string, stripe_key: string) {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const loginId = formGroup.get(login_id);
    const transactionKey = formGroup.get(transaction_key);
    const paymentGateway = formGroup.get(gateway);
    const stripeKey = formGroup.get(stripe_key);

    console.log(loginId, transactionKey, paymentGateway, stripeKey)
    if (paymentGateway?.value === 'Stripe') {
      transactionKey?.setErrors(null);
      loginId?.setErrors(null)
      stripeKey?.setErrors({ required: true })
      return { required: true };
    } else if (paymentGateway?.value === 'Authorized-net') {
      stripeKey?.setErrors(null)
      transactionKey?.setErrors({ required: true });
      loginId?.setErrors({ required: true })
      return { required: true };
    } else {
      return null;
    }
    // else {
    //   alert('world')
    // }
    // if (!loginId || !transactionKey) {
    //   return null;
    // }

    // if ((transactionKey.value && !loginId.value)) {
    //   loginId.setErrors({ required: true });
    //   return { required: true };
    // } else if ((!transactionKey.value && loginId.value)) {
    //   transactionKey.setErrors({ required: true });
    //   return { required: true };
    // }
    // else {
    //   loginId.setErrors(null);
    //   transactionKey.setErrors(null);
    //   return null;
    // }
    return null
  };
}

// export function usernameExistsValidator(userService: ResourceService) {
//   return (control: AbstractControl) => {
//     return of(control.value).pipe(
//       debounceTime(5000),
//       switchMap(value => userService.post<{ sub_domain: string }, Response<[]>>('vendor/check-sub-domain', { sub_domain: value })),
//       map(result => {
//         return result.body?.success == false ? { 'usernameExists': true } : null;
//       })
//     );
//   };
// }

export function priceComparisonValidator(control1: string, control2: string) {
  return (formGroup: FormGroup) => {
    const priceControl = formGroup.controls[control1];
    const minPriceControl = formGroup.controls[control2];
    if (
      priceControl.errors &&
      !priceControl.errors?.['priceValidator']
    ) {
      return;
    }
    if (priceControl.value && priceControl.value <= minPriceControl.value) {
      priceControl.setErrors({ priceValidator: true });
    } else {
      priceControl.setErrors(null);
    }
  };
}

export function replaceEmptyWithNull(obj: any) {
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          obj[key] = replaceEmptyWithNull(obj[key]);
        } else if (obj[key] === '') {
          obj[key] = null;
        }
      }
    }
  }
  return obj;
}

export function removeWhiteSpace(string: string) {
    return string.replaceAll(" ", "")
}
// return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//   return userService.post<{ sub_domain: string }, Response<[]>>('vendor/check-sub-domain', { sub_domain: control.value }).pipe(
//     filter(),
//     map((result) => {
//       return !result.body?.success ? { 'usernameExists': true } : null;
//     })
//   );
// };
