import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appImageUrlDirective]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ImageUrlDirective,
        multi: true
    }]
})
export class ImageUrlDirective implements Validator {
    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (!control.value?.startsWith('http://') && !control.value?.startsWith('https://')) {
            return {'imageUrlInvalid': true}
        }
        return null
    }
}
