import { Util } from './../../helpers/util';
import { SeriesService } from './../../providers/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popular_series: any ;
  year_pop_series: any;
  upcoming_series: any;
  today: Date = new Date();
  year: Date = new Date( this.today.getFullYear(), 0 , 1);
  date: Date = new Date();

  constructor( private ss: SeriesService) { }

  ngOnInit() {

    this.ss.getSeries(  1,
                                  'popularity.desc'      ).subscribe( data => this.popular_series = data );

    this.ss.getSeries(  1,
                                  'popularity.desc',
                                  Util.formattedDate(this.year),
                                  Util.formattedDate(this.today) ).subscribe( data => this.year_pop_series = data );

    this.ss.getSeries( 1,
      'first_air_date.asc',
      Util.formattedDate(  this.today)
                                ).subscribe( data => this.upcoming_series = data );


  }

  getTopSeries() {
    return this.popular_series;
  }



}
