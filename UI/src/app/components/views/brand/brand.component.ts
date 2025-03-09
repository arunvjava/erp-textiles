import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

  brandForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  saveBrand() {
    console.log('Brand form data->', this.brandForm.value);
  }

}
