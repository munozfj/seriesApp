import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  words = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const new1 = this.words.trim();
    console.log(new1 );
    const cads: string[] = new1.split(' ' );
    console.log(cads );
    const query = cads.join('-');
    console.log(query + '-' + `/search/${query}` );
  this.router.navigate(['/search' , query, 1  ]);
  }
}
