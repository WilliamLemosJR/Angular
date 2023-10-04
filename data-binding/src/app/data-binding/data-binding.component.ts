import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: any ='https://github.com/WilliamLemosJR'

  urlImagem = 'https://i.pinimg.com/originals/30/ca/43/30ca43cbe3c2b17a44b0779da56142ce.jpg'

  cursoAngular = true

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }
  
}
