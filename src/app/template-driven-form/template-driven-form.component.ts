import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {


  profileForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('', Validators.required),
    num: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
    date: new FormControl('', Validators.required),
    //code: new FormControl('', Validators.required)

  })



  get email() { return this.profileForm.get('email') }
  get nom() { return this.profileForm.get('nom') }
  get type() { return this.profileForm.get('type') }
  get num() { return this.profileForm.get('num') }
  get date() { return this.profileForm.get('date') }
  //get code() { return this.profileForm.get('code') }



  onAjout() {
    console.warn(this.profileForm.value);
  }
}
