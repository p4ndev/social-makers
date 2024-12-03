import { IStatus } from "./status.entity";

export interface IProject{
    
    Id?          : number;
    CreatedAt?   : string;

    Price       : string;
    Inventory   : string;
    Title       : string;
    UserId      : string;
    Description : string;

    StatusId?   : number;
    Status?     : IStatus;

}