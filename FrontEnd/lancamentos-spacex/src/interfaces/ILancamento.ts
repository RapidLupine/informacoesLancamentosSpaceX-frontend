import { ILinks } from './ILinks';

export interface ILancamento {
  auto_update: boolean;
  date_precision: string;
  date_unix: number;
  date_utc: Date;
  flight_number: number;
  id: string;
  links: ILinks;
  name: string;
  net: boolean;
  payloads: string[];
  rocket: string;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
}
