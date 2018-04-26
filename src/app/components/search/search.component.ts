import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../providers/series.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query = '';
  series: any;
  page: string;

  constructor(private ss: SeriesService,
                    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe( params => { this.query = params.get('query');
    this.page = params.get('page');
 const query2 = this.query.split('-');
//  console.log(this.query);
this.ss.getSeriesWithWords(query2).subscribe( data => { this.series = data;
//  console.log(this.series);
});
    });


    // params.subscribe( params => this.query = params['query']);
  }


  onClick(page: number ) {

  }
}
