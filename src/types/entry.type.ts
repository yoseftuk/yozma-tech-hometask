import { IEmptyNumber } from './empty-number.type';
import { IUser } from './user.type';

export interface ITime {
    time: IEmptyNumber;
    note: string;
}

export interface IFilledTime extends ITime {
    user: IUser;
    id?: number;
}
