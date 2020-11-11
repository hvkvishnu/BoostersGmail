import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { GetDetailsService } from './get-details.service';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    Header2Component,
    SidebarRightComponent,
    SidebarLeftComponent,
    SearchPipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [GetDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
