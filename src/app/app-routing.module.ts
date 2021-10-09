import { IndexBarberComponent } from './index-barber/index-barber.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoBarberComponent } from './agendamento-barber/agendamento-barber.component';
import { CadastroBarberComponent } from './cadastro-barber/cadastro-barber.component';
import { CarrinhoComprasBarberComponent } from './carrinho-compras-barber/carrinho-compras-barber.component';
import { ContatoBarberComponent } from './contato-barber/contato-barber.component';
import { LoginBarberComponent } from './login-barber/login-barber.component';
import { ServicosBarberComponent } from './servicos-barber/servicos-barber.component';
import { HomeBarberComponent } from './home-barber/home-barber.component';

const routes: Routes = [
{ path: 'agendamento-barber', component: AgendamentoBarberComponent },
{ path: 'cadastro-barber', component: CadastroBarberComponent },
{ path: 'carrinho-compras-barber', component: CarrinhoComprasBarberComponent },
{ path: 'contato-barber', component: ContatoBarberComponent },
{ path: 'login-barber', component: LoginBarberComponent },
{ path: 'servicos-barber', component: ServicosBarberComponent },
{ path: 'home-barber', component: HomeBarberComponent },
{ path: '', component: IndexBarberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
