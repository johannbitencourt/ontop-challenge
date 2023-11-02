import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPokemonTypeColor]'
})
export class PokemonTypeColorDirective implements OnInit {

  @Input('appPokemonTypeColor') type: string = '';

  private readonly colorMap: Record<string, string> = {
    normal: 'rgb(159, 163, 157)',
    fire: 'rgb(255, 153, 0)',
    water: 'rgb(20, 168, 255)',
    electric: 'rgb(255, 222, 0)',
    grass: 'rgb(28, 216, 14)',
    ice: 'rgb(46, 228, 198)',
    fighting: 'rgb(255, 33, 91)',
    poison: 'rgb(241, 73, 255)',
    ground: 'rgb(255, 107, 13)',
    flying: 'rgb(137, 189, 255)',
    psychic: 'rgb(255, 108, 100)',
    bug: 'rgb(123, 207, 0)',
    rock: 'rgb(216, 188, 90)',
    ghost: 'rgb(78, 106, 255)',
    dragon: 'rgb(0, 118, 255)',
    dark: 'rgb(90, 86, 106)',
    steel: 'rgb(35, 161, 189)',
    fairy: 'rgb(255, 118, 255)'
  };

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  public ngOnInit() {
    this.setColor();
  }

  private setColor() {
    const color = this.colorMap[this.type] || 'rgb(255,255,255)';
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.element.nativeElement, 'color', 'rgb(255,255,255)');
  }

}
