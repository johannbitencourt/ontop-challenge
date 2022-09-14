import { Component } from '@angular/core';
import { Section } from '~/interfaces/section.interface';
import { sections } from '~/mocks/sections.mock';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public sections: Section[] = sections;

  getNavigator(section: Section): boolean {
    sections.map(it => it.active = false);
    return section.active = true;
  }
}
