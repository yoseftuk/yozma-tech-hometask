import { IAddress } from './address.type';
import { ICompany } from './company.type';

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: '1-770-736-8031 x56442';
    website: 'hildegard.org';
    company: ICompany;
}
