export interface Contractor {
  id: number;
  image: string;
  contractor_name: string;
  contract_type: ContractType;
  start_date: string;
  amount: string;
  status: ContractorStatus;
}

export enum ContractorStatus {
  active = 'Active',
  pending = 'Signature Pending',
}

export enum ContractType {
  traditional = 'Traditional',
  periodic = 'Periodic Contract',
  service = 'Service Contract',
}
