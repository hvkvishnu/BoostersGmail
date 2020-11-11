import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MessageComponent } from './message/message.component';
const routes: Routes = [ { path: '', component: BodyComponent }, { path: 'mails', component: BodyComponent },{ path: 'message', component: MessageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*{ path: '', component: ProductListComponent },*/