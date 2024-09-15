export class Role {
    id?: number;
    name?: RoleType;
  }
export enum RoleType{
    CUSTOMER,
    RESTOWNER,
    USER
}