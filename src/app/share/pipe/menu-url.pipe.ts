import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appMenuUrl'
})
export class AppMenuUrlPipe implements PipeTransform {

  transform(url: string, args?: any): any {
    url = url.replace(/-/,'');
    return url.replace(/-/,'');
  }

}