import { Component, Input } from '@angular/core';
import { ContractorStatus } from '~/interfaces/contractor.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() placeholder: ContractorStatus | unknown;

  setClass(): string {
    return (this.placeholder === ContractorStatus.ACTIVE) ? 'active' : 'pending';
  }
}
