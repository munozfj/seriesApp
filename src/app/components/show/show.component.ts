import { SeriesService } from './../../providers/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id: number;
  serie: any;
  seasonEpisodes: any;

  constructor ( private actRoute: ActivatedRoute,
    private router: Router,
    private ss: SeriesService
) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params =>  { this.id = params['id'];
// console.log(this.id);
    this.ss.getId(  this.id  ).subscribe( data => this.serie = data );

    } );

    this.ss.getSeasonEpisodes(this.id, 1).subscribe( data => this.seasonEpisodes = data );


  }

}
