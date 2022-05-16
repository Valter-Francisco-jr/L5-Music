import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'musica'
},
{
  path: 'musica',
  loadChildren: () => import('./musica/musica.module').then(m => m.MusicaModule)
},
{
  path: 'historico',
  loadChildren: () => import('./historico/historico.module').then(m => m.HistoricoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
