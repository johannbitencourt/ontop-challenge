import { Component } from '@angular/core';
import { contractorColumns, contractors, contractorStatus, contractTypes } from '~/mocks/contractors.mock';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent {
  public contractTypes = contractTypes;
  public contractorStatus = contractorStatus;
  public contractors = contractors;
  public contractorColumns = contractorColumns;
}
