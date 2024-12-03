import { NgModule                               } from '@angular/core';
import { FormsModule                            } from '@angular/forms';
import { CommonModule                           } from '@angular/common';
import { BrowserModule                          } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule    } from '@angular/common/http';
import { LoadImageDirective                     } from './directives/load-image.directive';
import { JsonHeaderInterceptor                  } from './interceptors/json-header.interceptor';

import { SettingModule                          } from './modules/setting.module';
import { RoutingModule                          } from './modules/routing.module';

import { AppComponent                           } from './pages/app.component';
import { HomeComponent                          } from './pages/home.component';
import { ProjectNewComponent                    } from './pages/project-new/project-new.component';
import { ProjectListComponent                   } from './pages/project-list/project-list.component';
import { DesignSystemComponent                  } from './pages/design-system/design-system.component';
import { ProjectDetailComponent                 } from './pages/project-detail/project-detail.component';

import { IconButtonComponent                    } from './components/stateful/icon-button.component';
import { LikeBoxComponent                       } from './components/stateful/like-box/like-box.component';
import { ImageMenuComponent                     } from './components/stateful/image-menu/image-menu.component';
import { AdminMenuComponent                     } from './components/stateful/admin-menu/admin-menu.component';
import { PublicMenuComponent                    } from './components/stateful/public-menu/public-menu.component';
import { ImageSliderComponent                   } from './components/stateful/image-slider/image-slider.component';
import { DropdownlistComponent                  } from './components/stateful/dropdown-list/dropdown-list.component';
import { SubscriptionBoxComponent               } from './components/stateful/subscription-box/subscription-box.component';

import { LogoTypeComponent                      } from './components/stateless/logotype.component';
import { InputComponent                         } from './components/stateless/input/input.component';
import { ReactionBoxComponent                   } from './components/stateless/reaction-box/reaction-box.component';
import { NotificationBoxComponent               } from './components/stateless/notification-box/notification-box.component';

import {
  NotificationErrorComponent,
  NotificationSuccessComponent,
  NotificationWarningComponent                  } from './components/stateless/notification.component';

import {
  BadgePauseComponent,
  BadgeProgressComponent,
  BadgeDoneComponent                            } from "./components/stateless/badge.component";

@NgModule({
  declarations: [

    LoadImageDirective,

    /* Pages */
    AppComponent,                       HomeComponent,                        ProjectNewComponent,
    ProjectListComponent,               DesignSystemComponent,                ProjectDetailComponent,
    
    /* Stateful */
    IconButtonComponent,                LikeBoxComponent,                     ImageMenuComponent,
    AdminMenuComponent,                 PublicMenuComponent,                  ImageSliderComponent,
    DropdownlistComponent,              SubscriptionBoxComponent,

    /* Steteless */
    LogoTypeComponent,                  InputComponent,                       ReactionBoxComponent,
    NotificationBoxComponent,           NotificationErrorComponent,           NotificationSuccessComponent,
    NotificationWarningComponent,       BadgePauseComponent,                  BadgeProgressComponent,
    BadgeDoneComponent

  ],
  imports: [
    BrowserModule,                      FormsModule,                          HttpClientModule,
    CommonModule,                       RoutingModule,                        SettingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,       useClass: JsonHeaderInterceptor,      multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
