import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {

  }

  getCursos() {
      return ['HTML 5', 'CSS 30', 'JavaScript'];
  }

}
