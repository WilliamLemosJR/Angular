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

  valorAtual: any = ''

  valorSalvo:  any = ''

  isMouseOver:boolean = false

  nome: any = ''

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular'

  valorInicial=15



  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  onKeyUp(evento:KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }
  
}
