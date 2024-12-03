import { NgModule } from '@angular/core';

import { MENU_CONFIG                    } from '../settings/menu.config';
import { FORM_CONFIG                    } from '../settings/form.config';
import { PATHS                          } from '../settings/route.config';
import { BADGE_CONFIG                   } from '../settings/badge.config';
import { STATUS                         } from '../settings/status.config';
import { PROJECT_CONFIG                 } from '../settings/project.config';
import { NOTIFICATION_CONFIG            } from '../settings/notification.config';
import { MEDIA_PROVIDER                 } from '../settings/media-provider.config';

@NgModule({
  providers: [    
    { provide: "MENU_CONFIG",           useValue: MENU_CONFIG                                         },
    { provide: "NOTIFICATION_CONFIG",   useValue: NOTIFICATION_CONFIG                                 },
    { provide: "BADGE_CONFIG",          useValue: BADGE_CONFIG                                        },
    { provide: "FORM_CONFIG",           useValue: FORM_CONFIG                                         },
    { provide: "PATHS",                 useValue: PATHS                                               },
    { provide: "STATUS",                useValue: STATUS                                              },
    { provide: "PROJECT_CONFIG",        useValue: PROJECT_CONFIG                                      },
    { provide: "MEDIA_PROVIDER",        useValue: MEDIA_PROVIDER                                      }
  ]
})
export class SettingModule { }