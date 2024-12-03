import { Injectable } from "@angular/core";
import { IProject } from "src/app/entities/project.entity";

@Injectable({
    providedIn: 'root'
})
export class ProjectEventService{
    
    public Model? : IProject;

    IsValid = () : boolean => !(this.Model === undefined);
    
}