import { Request } from 'express';
import { UserInterface } from './user.interface';


export interface DataStoredInToken {
  id: string;
  _id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: UserInterface;
}