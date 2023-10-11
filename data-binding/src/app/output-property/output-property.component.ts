import { Component,OnInit,Input, EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor:number =0

  @Output() mudoValor= new EventEmitter()

  @ViewChild('campoInput')
  campoValorInput!: ElementRef; 

  incrementa(){
    this.campoValorInput.nativeElement.value++
    this.mudoValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudoValor.emit({novoValor: this.valor})
  }

}
