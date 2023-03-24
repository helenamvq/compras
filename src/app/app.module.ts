import { NgModule,  LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CasaComponent } from './views/casa/casa.component';
import { QuartoComponent } from './views/quarto/quarto.component';
import { BanheiroComponent } from './views/banheiro/banheiro.component';
import { CozinhaComponent } from './views/cozinha/cozinha.component';
import { SalaComponent } from './views/sala/sala.component';
import { AreaComponent } from './views/area/area.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CreateComponent } from './components/itens/create/create.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BanheiroCreateComponent } from './itens/create/banheiro-create/banheiro-create.component';
import { CozinhaCreateComponent } from './itens/create/cozinha-create/cozinha-create.component';
import { SalaCreateComponent } from './itens/create/sala-create/sala-create.component';
import { AreaCreateComponent } from './itens/create/area-create/area-create.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ItensReadComponent } from './components/itens/itens-read/itens-read.component';
import {MatTableModule} from '@angular/material/table';
import {  registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { UpdateComponent } from './components/itens/update/update.component';
import { DeleteComponent } from './components/itens/delete/delete.component';
import { DeleteBanheiroComponent } from './components/delete-banheiro/delete-banheiro.component';
import { ItensReadBanheiroComponent } from './components/itens-read-banheiro/itens-read-banheiro.component';
import { ItensReadCozinhaComponent } from './components/itens-read-cozinha/itens-read-cozinha.component';
import { ItensReadSalaComponent } from './components/itens-read-sala/itens-read-sala.component';
import { ItensReadAreaComponent } from './components/itens-read-area/itens-read-area.component';
import { UpdateCozinhaComponent } from './components/itens/update-cozinha/update-cozinha.component';
import { UpdateBanheiroComponent } from './components/itens/update-banheiro/update-banheiro.component';
import { UpdateSalaComponent } from './components/itens/update-sala/update-sala.component';
import { UpdateAreaComponent } from './components/itens/update-area/update-area.component';
import { DeleteCozinhaComponent } from './components/itens/delete-cozinha/delete-cozinha.component';
import { DeleteSalaComponent } from './components/itens/delete-sala/delete-sala.component';
import { DeleteAreaComponent } from './components/itens/delete-area/delete-area.component'


registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CasaComponent,

    QuartoComponent,
    BanheiroComponent,
    CozinhaComponent,
    SalaComponent,
    AreaComponent,
    InicioComponent,
    CreateComponent,
    BanheiroCreateComponent,
    CozinhaCreateComponent,
    SalaCreateComponent,
    AreaCreateComponent,
    ItensReadComponent,

     UpdateComponent,
      DeleteComponent,
      DeleteBanheiroComponent,
      ItensReadBanheiroComponent,
      ItensReadCozinhaComponent,
      ItensReadSalaComponent,
      ItensReadAreaComponent,
      UpdateCozinhaComponent,
      UpdateBanheiroComponent,
      UpdateSalaComponent,
      UpdateAreaComponent,
      DeleteCozinhaComponent,
      DeleteSalaComponent,
      DeleteAreaComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,





  ],
  providers: [{
    provide: LOCALE_ID,
  useValue: 'pt-BR'
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
