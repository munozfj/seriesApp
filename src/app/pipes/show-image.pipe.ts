import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'showImage'
})
export class ShowImagePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(photo: string, size: number,  type: string = 'poster' , add?: string )  {

    const local = './assets/images/';
    const remote = 'https://image.tmdb.org/t/p/';
    let image: string;

      photo = ( photo ) ? photo.trim() : '';

    //  console.log( 'llego:' + photo + '-' + size );

    if ( photo) {
      image = remote;
      image += (photo && size) ? `w${size}` : 'w300';
      image += photo;
    } else {
      image = local;
      switch ( type ) {
        case 'poster': image += 'poster.jpg';
        break;
        case 'backdrop': image += 'backdrop.jpg';
        break;
        default: image += 'backdrop.jpg';
        break;
      }
    }

    image = (add === 'url' ) ? 'url(' + image + ')' : image;
      // console.log('formato: ' + image );

    return image;
    // return this.sanitizer.bypassSecurityTrustUrl(image);
  }

}
