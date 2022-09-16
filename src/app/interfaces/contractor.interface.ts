export interface Contractor {
  image: string;
  name: string;
  type: ContractType;
  start_date: string;
  amount: string;
  status: ContractorStatus;
}

export enum ContractorStatus {
  ACTIVE = 'Active',
  PENDING = 'Signature Pending',
}

export enum ContractType {
  TRADITIONAL = 'Traditional',
  PERIODIC = 'Periodic Contract',
  SERVICE = 'Service Contract',
}
