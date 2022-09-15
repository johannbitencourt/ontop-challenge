import { Component } from '@angular/core';
import { contractorStatus, contractTypes } from '~/mocks/contractors.mock';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent {
  public contractTypes = contractTypes;
  public contractorStatus = contractorStatus;
}
