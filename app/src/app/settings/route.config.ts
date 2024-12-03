import { Routes                     } from "@angular/router";
import { HomeComponent              } from "../pages/home.component";
import { SignOutComponent           } from "../pages/sign-out.component";
import { ProjectNewComponent        } from "../pages/project-new/project-new.component";
import { ProjectListComponent       } from "../pages/project-list/project-list.component";
import { DesignSystemComponent      } from "../pages/design-system/design-system.component";
import { ProjectDetailComponent     } from "../pages/project-detail/project-detail.component";

const PATHS = {
    Home            : "",
    ListProject     : "project",
    NewProject      : "project/new",
    ProjectDetail   : "project/:id",
    SignOut         : "disconnect",
    DesignSystem    : "design-system"
};

const ROUTE_CONFIG : Routes = [
    { path: PATHS.Home,             component: HomeComponent            },
    { path: PATHS.SignOut,          component: SignOutComponent         },
    { path: PATHS.NewProject,       component: ProjectNewComponent      },
    { path: PATHS.ListProject,      component: ProjectListComponent     },
    { path: PATHS.DesignSystem,     component: DesignSystemComponent    },
    { path: PATHS.ProjectDetail,    component: ProjectDetailComponent   }
];

const ENDPOINTS = {
    Feedback        : "https://localhost:7291",
    Platform        : "https://localhost:7120",
    Media           : "https://localhost:7011",
    MediaProvider   : "https://api.cloudinary.com"
}

export { PATHS, ROUTE_CONFIG, ENDPOINTS };