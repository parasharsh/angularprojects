import { Component, OnInit } from '@angular/core';
import { FooLibService } from '#lib/foo-lib.service';

@Component({
  selector: 'lib-foo-lib',
  template: `
    <p>
      foo-lib works!
    </p>
  `,
  styles: []
})
export class FooLibComponent implements OnInit {

  constructor(private service: FooLibService) { }

  ngOnInit() {
  }

}
