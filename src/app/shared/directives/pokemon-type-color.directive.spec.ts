import { Component } from '@angular/core';
import { PokemonTypeColorDirective } from './pokemon-type-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: '<div [appPokemonTypeColor]="type"><ng-content></ng-content></div>'
})
class TestComponent {
  type = 'fire';
}


describe('PokemonTypeColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTypeColorDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('apply pokemon type color to the element', () => {
    const directiveElement = fixture.nativeElement.querySelector('div');
    expect(directiveElement.style.backgroundColor).toBe('rgb(255, 153, 0)');
    expect(directiveElement.style.color).toBe('rgb(255, 255, 255)');
  });
});
