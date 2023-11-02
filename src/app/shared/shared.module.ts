import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ArrayByLengthPipe } from './pipes/array-by-length.pipe';
import { PokemonTypeColorDirective } from './directives/pokemon-type-color.directive';


@NgModule({
  declarations: [
    PaginatorComponent,
    PlaceholderComponent,
    ArrayByLengthPipe,
    PokemonTypeColorDirective,
  ],
  imports: [CommonModule],
  exports: [
    PaginatorComponent,
    PlaceholderComponent,
    ArrayByLengthPipe,
    PokemonTypeColorDirective
  ],
})
export class SharedModule { }
