export interface Deal {
  id?: string;
  name: string;
  value: number;
  stage: string;
  customer: string;
  closeDate: string;
  status: string; // Make sure this matches the field you expect in your data
}
