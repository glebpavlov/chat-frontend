import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  {path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
