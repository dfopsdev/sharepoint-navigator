import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonContainerComponent } from './components/button-container/button-container.component';
import { ListContainerComponent } from './components/list-container/list-container.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonContainerComponent },
  { path: 'list', component: ListContainerComponent },
  { path: '', redirectTo: '/buttons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
