import { Role } from "../models";

export interface UserModel {
    id?: number,
    organizationId?: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    address: string,    
    giftAid?: string,
    charityOption?: string,
    amanahfyOption?: string,
    RoleId:number,
    Role?:Role
};