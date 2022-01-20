import { BehaviorSubject, Observable, of } from "rxjs";
import { concatMap, finalize, tap } from "rxjs/operators";

import { Injectable } from "@angular/core";

//not provided in root because we need multiple instances
// because we might need it locally for example at  the level of a form but not block the  whole user interface with a global loading
// so we need to define where this service is going to be available in the dependency injection tree
@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
    console.log("Loading service created...");
  }
  //it will take an  observ and return an  observ of the same type so it can turn off and on the  loading indicator
  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    //initial value of null to complete directly
    return of(null).pipe(
      //to trigger a side-effect( the loading indicator )
      tap(() => this.loadingOn()),
      concatMap(() => obs$),
      finalize(() => this.loadingOff())
    );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
