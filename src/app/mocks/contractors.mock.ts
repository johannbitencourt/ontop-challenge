import { ContractorStatus, ContractType } from '~/interfaces/contractor.interface';

export const contractors = [
  {
    id: 1,
    image: '',
    contractor_name: 'Darlene Robertson',
    contract_type: 'Traditional',
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: 'Active',
  },
  {
    id: 2,
    image: '',
    contractor_name: 'Darlene Robertson',
    contract_type: 'Traditional',
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: 'Active',
  },
  {
    id: 3,
    image: '',
    contractor_name: 'Darlene Robertson',
    contract_type: 'Traditional',
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: 'Signature pending',
  },
];

export const contractTypes = [
  {
    id: 1,
    value: ContractType.traditional,
  },
  {
    id: 2,
    value: ContractType.periodic,
  },
  {
    id: 3,
    value: ContractType.service,
  }
];

export const contractorStatus = [
  {
    id: 1,
    value: ContractorStatus.active,
  },
  {
    id: 2,
    value: ContractorStatus.pending,
  }
];
