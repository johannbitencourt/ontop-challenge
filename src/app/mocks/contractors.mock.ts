import { Contractor, ContractorStatus, ContractType } from '~/interfaces/contractor.interface';

export const contractors: Contractor[] = [
  {
    image: 'assets/user_1.png',
    name: 'Darlene Robertson',
    type: ContractType.TRADITIONAL,
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: ContractorStatus.ACTIVE,
  },
  {
    image: 'assets/user_2.png',
    name: 'Darlene Robertson',
    type: ContractType.TRADITIONAL,
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: ContractorStatus.ACTIVE,
  },
  {
    image: 'assets/user_3.png',
    name: 'Darlene Robertson',
    type: ContractType.TRADITIONAL,
    start_date: 'Mar 4, 2021',
    amount: '$200 USD',
    status: ContractorStatus.PENDING,
  },
];

export const contractTypes = [
  {
    id: 1,
    value: ContractType.TRADITIONAL,
  },
  {
    id: 2,
    value: ContractType.PERIODIC,
  },
  {
    id: 3,
    value: ContractType.SERVICE,
  }
];

export const contractorStatus = [
  {
    id: 1,
    value: ContractorStatus.ACTIVE,
  },
  {
    id: 2,
    value: ContractorStatus.PENDING,
  }
];

export const contractorColumns = [
  {
    name: 'image',
    friendly_name: '',
  },
  {
    name: 'contractor_name',
    friendly_name: 'Contractor name',
  },
  {
    name: 'type',
    friendly_name: 'Type',
  },
  {
    name: 'start_date',
    friendly_name: 'Start date',
  },
  {
    name: 'amount',
    friendly_name: 'Amount',
  },
  {
    name: 'status',
    friendly_name: 'Status',
  },
  {
    name: 'actions',
    friendly_name: 'Actions',
  },
];
