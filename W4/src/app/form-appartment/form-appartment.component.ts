import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../model/Residence';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent implements OnInit {
  apartForm: FormGroup = new FormGroup({});
  residences: Residence[] = [];

  constructor(private fb: FormBuilder, private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.apartForm = this.fb.group({
      appartNum: ['', Validators.required],
      floorNum: ['', Validators.required],
      surface: ['', Validators.required],
      terrace: [''],
      surfaceTerrace: [''],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residence: [this.act.snapshot.params['id'], Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value === 'oui') {
        this.apartForm.get('surfaceTerrace')?.setValidators(Validators.required);
      } else {
        this.apartForm.get('surfaceTerrace')?.clearValidators();
      }
      this.apartForm.get('surfaceTerrace')?.updateValueAndValidity();
    });

    this.residences = this.getResidences();
  }

  getResidences(): Residence[] {
    return [
      { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg' },
      { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg' },
      { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg' },
      { id: 4, name: 'El Anber', address: 'Manzah 5', image: '../../assets/images/R4.jpg' }
    ];
  }

  submitForm() {
    if (this.apartForm.valid) {
      console.log(this.apartForm.value);
      this.apartForm.reset();
    }
  }
}
