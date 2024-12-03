import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/entities/project.entity';
import { ProjectEventService } from 'src/app/services/events/project.service';
import { PlatformApiService } from 'src/app/services/platform/platform-api.service';
import { PROJECT_CONFIG } from 'src/app/settings/project.config';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  public project$? : Observable<IProject[]>;

  constructor(
    @Inject("PROJECT_CONFIG") public helper : typeof PROJECT_CONFIG,
    private projectEvent : ProjectEventService,
    public platformApi : PlatformApiService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.project$ = this.platformApi.projects();
  }

  onProjectClicked(model : IProject) : void{
    this.projectEvent.Model = model;
    this.router.navigateByUrl('/project/' + model.Id);
  }

}