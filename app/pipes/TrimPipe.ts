import {Injectable, Pipe} from 'angular2/core';

/*
  Generated class for the TrimPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'trim'
})
@Injectable()
export class TrimPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]): string {
    const trimmedString = value.substr(0, 10);
    return trimmedString;
  }
}
