import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from '#user/userlist/userlist.component';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class UserModule { }
