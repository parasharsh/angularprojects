import { Component, OnInit } from '@angular/core';
import { CustomgridComponent } from '#shared/customgrid/customgrid.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.sass']
})
export class UserlistComponent extends CustomgridComponent implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
