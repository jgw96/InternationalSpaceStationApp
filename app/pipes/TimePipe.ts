import {Injectable, Pipe} from 'angular2/core';

/*
  Generated class for the TimePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'time'
})
@Injectable()
export class TimePipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: number, args: any[]): Date {
    return new Date(value * 1000);
  }
}
