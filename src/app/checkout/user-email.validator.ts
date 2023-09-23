import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, combineLatest, map } from "rxjs";
import { CheckoutService } from "./checkout.service";


export const userEmailValidator = (
  checkoutService: CheckoutService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> =>
    combineLatest([checkoutService.checkUser(control.value), checkoutService.checkBlocked(control.value)]).pipe(
      map(([checkUser, checkBlocked]) => {
        if(checkUser.isEmailExist) {
          return {emailExist: true}
        }
        if(checkBlocked.isEmailBlocked) {
          return {emailBlocked: true}
        }
        return null;
      })
    )
}
