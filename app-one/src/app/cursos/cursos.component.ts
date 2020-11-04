import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'cursos-component',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  portalUrl: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.portalUrl = 'https://www.w3schools.com/'

    // for (let i=0; i<this.cursos.length; i++) {
    //   let curso = this.cursos[i];
    // }

    // var service = new CursosService();

    this.cursos = this.cursosService.getCursos();
   }

  ngOnInit(): void {
  }

}
