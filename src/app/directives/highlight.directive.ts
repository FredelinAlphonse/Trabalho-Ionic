import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private _cor = 'pink';

  @Input() set cor(cor: string){
    this._cor = cor;
    this.aplicarCor();
  }

  private aplicarCor() {
    this.el.nativeElement.style.backgroundColor = this._cor;
  }

  constructor(public el: ElementRef) { 
    this.aplicarCor();
  }
}