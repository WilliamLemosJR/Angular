import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomeGithub: string ;

  cursos : string [] =['HTML', 'CSS' , 'JavaScript']

  constructor () {
    this.nomeGithub = 'https://github.com/WilliamLemosJR'

    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i] ;
    }
  }
  
}
