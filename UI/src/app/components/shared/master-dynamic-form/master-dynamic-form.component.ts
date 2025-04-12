import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DynamicField} from '../../../models/dynamic.model';

@Component({
  selector: 'app-master-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './master-dynamic-form.component.html',
  styleUrl: './master-dynamic-form.component.css'
})
export class MasterDynamicFormComponent {

  @Input() config: DynamicField[] = [];
  @Output() formSubmitted = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.config.forEach(field => {
      this.form.addControl(
        field.name,
        this.fb.control(field.value || '', this.getValidators(field.validators))
      );
    });
  }

  getValidators(validators?: any[]): any[] {
    const formValidators: any[] = [];
    if (validators) {
      validators.forEach(validator => {
        if (validator.type === 'required') formValidators.push(Validators.required);
        if (validator.type === 'minLength') formValidators.push(Validators.minLength(validator.value));
        if (validator.type === 'maxLength') formValidators.push(Validators.maxLength(validator.value));
        if (validator.type === 'email') formValidators.push(Validators.email);
      });
    }
    return formValidators;
  }

  mapValidators(validators: any[]): any[] {
    return validators.map((validator) => {
      switch (validator.type) {
        case 'required': return Validators.required;
        case 'minLength': return Validators.minLength(validator.value);
        case 'maxLength': return Validators.maxLength(validator.value);
        case 'email': return Validators.email;
        default: return null;
      }
    }).filter(v => v !== null);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    }
  }
}
