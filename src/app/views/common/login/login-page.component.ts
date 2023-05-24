//Bhavana samel 30-05-2022

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    isLoginForm: boolean = true;

    signUpObj: any = { userName: '', password: '' };
    loginObj: any = { userName: '', password: '' };
    signUpUsers: any[] = [];
    loginForm: any = FormGroup;
    signUpForm: any = FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router,
        private route: ActivatedRoute,) {

    }

    ngOnInit() {
       // debugger
        // alert('LOGIN PAGE Rendered')
        this.createLoginForm();
        this.createSignUpForm();
        // localStorage.clear();

        const localStorageData = localStorage.getItem('signUpUsers');
        if (localStorageData != null) {
            this.signUpUsers = JSON.parse(localStorageData);
        }
    }

    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required],
        });
    }
    get loginFormControls() { return this.loginForm.controls; }

    createSignUpForm() {
        this.signUpForm = this.formBuilder.group({
            userName: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required],
        });
    }
    get signUpFormControls() { return this.signUpForm.controls; }

    enableRegistrationForm() {
        this.isLoginForm = !this.isLoginForm;
    }

    onSignUp() {
        //debugger
        // this.signUpObj = this.signUpForm.values;
        this.signUpUsers.push(this.signUpForm.value);
        localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
        // this.signUpObj = {
        //     userName: '', password: ''
        // };

        this.resetSignUpForm();
        this.isLoginForm = true;
        window.location.reload();

    }

    onLogIn() {
       // debugger
        this.loginObj = this.loginForm.value;
        const ifUserExist = this.signUpUsers.find(a => a.userName == this.loginForm.value.userName && a.password == this.loginForm.value.password);
        if (ifUserExist != undefined) {
            // alert('Logged In Successfully')
            this.resetLoginForm();
            // this.router.navigate(["/lifezee-home-page"]);
            // this.router.navigate(["/dashboard"]);
            this.router.navigate(["/patients-dashboard"]);

        } else {
            alert('Invalid Credentails')

        }
    }

    resetLoginForm() {
        this.loginForm.reset();
    }

    resetSignUpForm() {
        this.signUpForm.reset();
    }
}
