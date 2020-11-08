import { Observable, ReplaySubject, Subject } from 'rxjs';
import { UserService } from './../../user.service';
import { getLocaleDirection } from '@angular/common';
import { Component, Pipe, Directive, ElementRef, EventEmitter, Input, OnInit, Output, PipeTransform } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import {
  ComparePassword,
  ValidateString
} from '../../customvalidators.validator';

import {
  ErrorInputDirective,
} from './../../customdirectives.directive';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-form',
  // class:'component-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  host: {'id':'component-form'},
})


export class FormComponent implements OnInit, Validators {
  public user: User = new User();

  public user$: Subject<User[]> = new ReplaySubject<User[]>(1);

  form: FormGroup;
  formValidate: boolean = false;
  userTab: User[] = [];

  // @Input() userName: string = this.user.firstname;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.user = new User();
    this.user.gender = 'Man';
    this.user.country = 'fr';
    this.user.firstname = 'Baptiste';
    this.user.lastname = 'Steinmetz';
    this.user.mail = 'baptiste@mail.mail';
    this.user.phone = '0619735555';
    this.user.login = 'baptiste67';
    this.user.password = 'baptiste';
    this.user.adress = '1 rue saint léon';
    this.user.zipcode = '67700';
    this.user.city = 'saverne';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group(
      {
      firstname: [null, [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')]],
      lastname: [null, [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')
      ]],
      city: [null, Validators.required],
      zipcode: [null, [
        Validators.pattern('^[0-9]+$'),
        Validators.required,
      ]
    ],
      phone: [null, [
        Validators.pattern('^[0-9]+$'),
        Validators.required,
      ]],
      adress: [null, Validators.required],
      login: [null, Validators.required],
      mail: [null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
        ]
      ],
      gender: [null, Validators.required],
      country: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    },
    {
      validator: ComparePassword('password', 'confirmPassword')
    }
    );
  }

  get f() {
    return this.form.controls;
  }


  isValidInput(fieldName): boolean {
    return this.form.controls[fieldName].invalid &&
      (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
  }

  onSubmit(event) {
    event.preventDefault();
    this.formValidate = true;
    // console.log(this.user);
    this.user.firstname = this.form.value.firstname;
    if (this.form.valid) {
      this.userService.addUser(this.user).subscribe((response) => {
        console.log(response)
      });
      // dispatch to store
      // this.userTab.push(this.user);
    }
  }
}
