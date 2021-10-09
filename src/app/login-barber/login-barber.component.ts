import { LoginService } from '../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-barber',
  templateUrl: './login-barber.component.html',
  styleUrls: ['./login-barber.component.css']
})
export class LoginBarberComponent implements OnInit {

  readonly regexSenha: RegExp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/;
  readonly regexEmail: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.regexEmail)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.pattern(this.regexSenha)])
    })
  }

  login(): void {
    this.loginService
    .realizarLogin(this.loginForm?.value)
    .pipe(take(1))
    .subscribe(
      (success) =>
        alert("Login realizado com sucesso")
        ,
      (error) =>
        alert("Usuario ou senha invalidos")
    );

      this.redirecionar();
  }

  redirecionar(): void {
    this.router.navigate(['/']);
  }
}

