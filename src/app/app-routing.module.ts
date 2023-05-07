import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'users', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule) },
  { path: 'contacts', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '', pathMatch:'full', redirectTo:'users'},
  { path:'**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
