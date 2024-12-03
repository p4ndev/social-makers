import { STATUS } from "./status.config";

export const FORM_CONFIG = Object.freeze({
    Wrap    : "px-3 py-2 border border-yellow-300 text-yellow-600 rounded-lg secondary-bg-color w-full",
    Source  : [
        { Id: 1, Name: STATUS[0].Name   },
        { Id: 2, Name: STATUS[1].Name   },
        { Id: 3, Name: STATUS[2].Name   }
    ],
    MaxLength:{
        Title       : 100,
        Description : 255
    }
});