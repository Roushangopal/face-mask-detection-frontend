import { Injectable } from '@angular/core';
import { WithoutMaskService } from './without-mask.service';
import { peopleWithoutMask } from './peopleWithoutMask';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutMaskResolver implements Resolve<peopleWithoutMask[]> {

  constructor(private WithoutMask : WithoutMaskService){}

  resolve(route: ActivatedRouteSnapshot): Observable<peopleWithoutMask[]> {
    return this.WithoutMask.getPeopleWithoutMask()
  }
}
