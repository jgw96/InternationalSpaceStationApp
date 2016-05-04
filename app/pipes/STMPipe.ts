import {Injectable, Pipe} from 'angular2/core';

/*
  Generated class for the StmPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'stm'
})
@Injectable()
export class StmPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: number, args: any[]): number {   
    return Math.floor(value / 60);
  }
}
