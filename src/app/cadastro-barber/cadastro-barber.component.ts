import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../Services/cadastro.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro-barber',
  templateUrl: './cadastro-barber.component.html',
  styleUrls: ['./cadastro-barber.component.css']
})
export class CadastroBarberComponent implements OnInit {

  readonly regexSenha: RegExp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/;
  readonly regexEmail: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  readonly regexNome: RegExp = /^[a-zA-Z\s]{5,}$/;

  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.pattern(this.regexNome)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.regexEmail)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.pattern(this.regexSenha)])
    })
  }


  cadastrar(): void {
    this.cadastroService
      .cadastrarUsuario(this.cadastroForm?.value)
      .pipe(take(1))
      .subscribe(
        (success) =>
          alert("Usuario cadastrado com sucesso")
          ,
        (error) =>
          alert("Usuario nao cadastrado")
      );

    this.cadastroForm.reset();
  }

}
