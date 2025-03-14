import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class HelperUtils {

    /**
     * Resets the form values
     * @param form
     */
    resetForm(form: FormGroup) {
        form.reset();
    }
}