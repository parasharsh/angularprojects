import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooLibModule } from 'foo-lib';
import { UserlistComponent } from '#user/userlist/userlist.component';
import { CustomgridComponent } from '#shared/customgrid/customgrid.component';
import { SharedModule } from '#shared/shared.module';
import { UserModule } from '#user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooLibModule,
    SharedModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
