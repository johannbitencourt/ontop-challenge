import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonTypeColorPipe } from './pipes/pokemonTypeColor.pipe';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';


const directives: any[] = [];
const components = [
  PlaceholderComponent
];
const pipes = [
  PokemonTypeColorPipe
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [CommonModule],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ],
})
export class SharedModule {}
