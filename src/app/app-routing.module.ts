import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaComponent } from './views/casa/casa.component';
import { QuartoComponent } from './views/quarto/quarto.component';
import { BanheiroComponent } from './views/banheiro/banheiro.component';
import { CozinhaComponent } from './views/cozinha/cozinha.component';
import { SalaComponent } from './views/sala/sala.component';
import { AreaComponent } from './views/area/area.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CreateComponent } from './components/itens/create/create.component';
import { BanheiroCreateComponent } from './itens/create/banheiro-create/banheiro-create.component';
import { CozinhaCreateComponent } from './itens/create/cozinha-create/cozinha-create.component';
import { SalaCreateComponent } from './itens/create/sala-create/sala-create.component';
import { AreaCreateComponent } from './itens/create/area-create/area-create.component';
import { UpdateComponent } from './components/itens/update/update.component';
import { DeleteComponent } from './components/itens/delete/delete.component';
import { DeleteBanheiroComponent } from './components/delete-banheiro/delete-banheiro.component';
import { UpdateCozinhaComponent } from './components/itens/update-cozinha/update-cozinha.component';
import { UpdateBanheiroComponent } from './components/itens/update-banheiro/update-banheiro.component';
import { UpdateSalaComponent } from './components/itens/update-sala/update-sala.component';
import { UpdateAreaComponent } from './components/itens/update-area/update-area.component';
import { DeleteCozinhaComponent } from './components/itens/delete-cozinha/delete-cozinha.component';
import { DeleteAreaComponent } from './components/itens/delete-area/delete-area.component';
import { DeleteSalaComponent } from './components/itens/delete-sala/delete-sala.component';


const routes: Routes = [
  {
  path: "",
  component: CasaComponent

},
{
  path: "quarto/create",
  component: CreateComponent

},
{
  path: "quarto",
  component: QuartoComponent

},


{
  path: "banheiro",
  component: BanheiroComponent

},
{
  path: "banheiro/create",
  component: BanheiroCreateComponent

},
{
  path: "banheiro/itens/update/banheiro/",
  component: UpdateBanheiroComponent
},
{
  path: "banheiro/itens/delete/banheiro",
  component: DeleteBanheiroComponent

},
{
  path: "cozinha",
  component: CozinhaComponent

},
{
  path: "cozinha/create",
  component: CozinhaCreateComponent

},
{
  path: "cozinha/itens/update/cozinha/",
  component: UpdateCozinhaComponent

},
{
  path: "cozinha/itens/delete/cozinha/",
  component: DeleteCozinhaComponent

},
{
  path: "sala",
  component: SalaComponent

},
{
  path: "sala/create",
  component: SalaCreateComponent

},
{
  path: "sala/itens/update/sala/",
  component: UpdateSalaComponent

},
{
  path: "sala/itens/delete/sala/",
  component: DeleteSalaComponent
},
{
  path: "area",
  component: AreaComponent

},
{
  path: "area/create",
  component: AreaCreateComponent

},
{
  path: "area/itens/update/",
  component: UpdateAreaComponent

},
{
  path: "area/itens/delete/area/",
  component: DeleteAreaComponent

},
{
  path: "inicio",
  component: InicioComponent

},
{
path: "casa",
component: CasaComponent

},

{
  path: "itens/update/:id",
  component: UpdateComponent

},
{
  path: "itens/update/cozinha/:id",
  component: UpdateCozinhaComponent

},
{
  path: "itens/update/banheiro/:id",
  component: UpdateBanheiroComponent

},
{
  path: "itens/update/sala/:id",
  component: UpdateSalaComponent

},
{
  path: "itens/update/area/:id",
  component: UpdateAreaComponent

},
{
  path: "itens/delete/:id",
  component: DeleteComponent

},
{
  path: "itens/delete/cozinha/:id",
  component: DeleteCozinhaComponent

},
{
  path: "itens/delete/banheiro/:id",
  component: DeleteBanheiroComponent

},
{
  path: "itens/delete/sala/:id",
  component: DeleteSalaComponent
},
{
  path: "itens/delete/area/:id",
  component: DeleteAreaComponent

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
