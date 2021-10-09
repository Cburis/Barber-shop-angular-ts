import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarberComponent } from './header-barber/header-barber.component';
import { FooterBarberComponent } from './footer-barber/footer-barber.component';
import { HomeBarberComponent } from './home-barber/home-barber.component';
import { ServicosBarberComponent } from './servicos-barber/servicos-barber.component';
import { AgendamentoBarberComponent } from './agendamento-barber/agendamento-barber.component';
import { ContatoBarberComponent } from './contato-barber/contato-barber.component';
import { CarrinhoComprasBarberComponent } from './carrinho-compras-barber/carrinho-compras-barber.component';
import { LoginBarberComponent } from './login-barber/login-barber.component';
import { CadastroBarberComponent } from './cadastro-barber/cadastro-barber.component';
import { FormsModule } from '@angular/forms';
import { IndexBarberComponent } from './index-barber/index-barber.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarberComponent,
    FooterBarberComponent,
    HomeBarberComponent,
    ServicosBarberComponent,
    AgendamentoBarberComponent,
    ContatoBarberComponent,
    CarrinhoComprasBarberComponent,
    LoginBarberComponent,
    CadastroBarberComponent,
    IndexBarberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
