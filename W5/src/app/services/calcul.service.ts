import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculService {
  constructor() {}

  verify(list: any[], criteria: string, value: any): number {
    let x = 0;
    for (let item in list) {
      if (list[item][criteria] == value) {
        x++;
      }
    }
    return x;
  }
}
