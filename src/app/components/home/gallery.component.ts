import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input('title') title: string;
  @Input('data') data: any;
  @Input('criteria') criteria: string;

  // public backgroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeImage(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }



}
