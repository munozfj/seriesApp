import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../providers/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Util } from '../../helpers/util';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  series: any;
  page: number;
  criteria: string;

  today: Date = new Date();
  year: Date = new Date(this.today.getFullYear(), 0, 1);
  date: Date = new Date();
  constructor(
    private ss: SeriesService,
    private actRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => { this.criteria = params['criteria'];
     this.page = params['page'];  });

    switch ( this.criteria)  {
      case  'top':
      this.ss.getSeries(  1,
        'popularity.desc'      ).subscribe( data => this.series = data );
        break;

        case  'year':
        this.ss.getSeries(  1,
          'popularity.desc',
          Util.formattedDate(this.year),
          Util.formattedDate(this.today) ).subscribe( data => this.series = data );
        break;

        case  'upcoming':
      this.ss.getSeries( 1,
        'first_air_date.asc',
        Util.formattedDate(  this.today)
                                  ).subscribe( data => this.series = data );
        break;





    }
  }

  onClick(page: string) {
    this.route.navigate(['/list/' + page]);
    window.location.reload();
  }

  getNewDate(stm) { return Util.getNewDate(stm); }
}
