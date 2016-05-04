import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Calendar} from "ionic-native";

/*
  Generated class for the Locationprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: Http) {

  }

  public getFlyOvers(lat: number, long: number): Observable<any> {
    return this.http.get(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}&n=20`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getCurrentPosition(): Observable<any> {
    return this.http.get("http://api.open-notify.org/iss-now.json")
      .map(this.extractData)
      .catch(this.handleError)
  }

  public calendarCreate(title: string, location: string, notes: string, startDate: Date, endDate: Date): void {
    Calendar.createEventInteractively(title, location, notes, startDate, endDate).then(() => {
      console.log("Created");
    }).catch((error) => {
      console.log(error);
    })
  }

  private extractData(res: Response): Object {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): any {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

