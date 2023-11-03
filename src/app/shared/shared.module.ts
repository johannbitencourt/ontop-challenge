import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ArrayByLengthPipe } from './pipes/array-by-length.pipe';
import { PokemonTypeColorDirective } from './directives/pokemon-type-color.directive';
import { CardComponent } from './components/card/card.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    CardComponent,
    BadgeComponent,
    ErrorComponent,
    PaginatorComponent,
    PlaceholderComponent,
    ArrayByLengthPipe,
    PokemonTypeColorDirective,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    BadgeComponent,
    ErrorComponent,
    PaginatorComponent,
    PlaceholderComponent,
    ArrayByLengthPipe,
    PokemonTypeColorDirective
  ],
})
export class SharedModule { }
