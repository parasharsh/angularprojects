import { NgModule } from '@angular/core';
import { FooLibComponent } from '#lib/foo-lib.component';

@NgModule({
  declarations: [FooLibComponent],
  imports: [
  ],
  exports: [FooLibComponent]
})
export class FooLibModule { }
