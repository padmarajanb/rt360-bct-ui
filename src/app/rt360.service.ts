import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rt360Service {

  constructor() { }

  dynamicContentChangeSource = new Subject<string>();
  
  dynamicContentpageChange(tabName: string) {
    this.dynamicContentChangeSource.next(tabName);
  }

  pageInfo = '';
}
