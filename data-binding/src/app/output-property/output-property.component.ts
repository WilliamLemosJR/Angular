import { Component,OnInit,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor:number =0

  @Output() mudoValor= new EventEmitter()

  incrementa(){
    this.valor++
    this.mudoValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--
    this.mudoValor.emit({novoValor: this.valor})
  }

}
