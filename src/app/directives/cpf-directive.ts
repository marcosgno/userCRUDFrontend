import { Directive, OnInit, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Directive({
  selector: '[cpf-directive]'
})
export class CpfDirective implements OnInit {
  constructor(public el: ElementRef, public renderer: Renderer2, private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('input', ["$event.target.value"]) onInput(e: string) {
    this.format(e);
  };

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    this.format(event.clipboardData.getData('text/plain'));
  }

  @HostListener("ngModelChange", ["$event"]) onNgModelChange(value) {
    this.format(value);
  }

  format(cpf: string) {
    if (cpf != null){
      cpf=cpf.replace(/\D/g,"");
      cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
      this.el.nativeElement.value = cpf;
    }
    
  }

}