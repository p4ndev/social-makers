import { ENotificationStatus } from "../enums/notification.enum";

export interface INotificationMessage{
    Id?         : number;
    Status      : ENotificationStatus;
    Content     : string;
    CssClass?   : string;
}