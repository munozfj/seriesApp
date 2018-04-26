import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-little-info',
  templateUrl: './little-info.component.html',
  styleUrls: ['./little-info.component.css']
})
export class LittleInfoComponent implements OnInit {
@Input('data2') data2: any;
  constructor() { }

  ngOnInit() {
  }

}
