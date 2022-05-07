export interface OrderDO {
  deleted: number;
  gmtCreate: string;
  gmtCreateUser: number;
  gmtModified: string;
  gmtModifiedUser: number;
  id: number;
  name: string;
  optCounter: number;
  price: number;
}

export interface OrderReq {
  name: string;
  price: number;
}

export interface User {
  age: string;
  name: string;
}