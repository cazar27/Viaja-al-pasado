import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './../forbidden-inputs/forbidden-inputs.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  inputsMessageContact = {
    name: 'Ingrese su nombre.',
    mail: 'Ingrese su email.',
    body: 'Ingrese su mensaje.',
    subjet: 'Asunto',
    politica: true
  };

  messageContact: FormGroup;

  message = {
    name: '',
    mail: '',
    body: '',
    subjet: '',
    politica: true
  };

  constructor() { }

  onSubmit() {

    console.log(this.messageContact);
  }

  ngOnInit() {

    this.messageContact = new FormGroup({
      'name': new FormControl(this.message.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'mail': new FormControl(this.message.mail, [
        Validators.required,
        Validators.email,
      ]),
      'body': new FormControl(this.message.body, [
        Validators.required,
        Validators.minLength(40)
      ]),
      'subjet': new FormControl(this.message.subjet, [
        Validators.required,
        Validators.minLength(12),
      ]),
      'politica': new FormControl(this.message.politica, [
        Validators.required,
        Validators.nullValidator
      ])
    });
  }

}
