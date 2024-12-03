import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProject } from 'src/app/entities/project.entity';
import { ProjectEventService } from 'src/app/services/events/project.service';
import { Location } from '@angular/common'
import { IPicture } from 'src/app/entities/picture.entity';
import { ImageApiService } from 'src/app/services/media/image-api.service';
import { NotificationEventService } from 'src/app/services/events/notification.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  canRender : boolean = false;
  source    : string = "";

  projectId : number = 0;
  current   : number = 0;
  
  model!    : IProject;
  image!    : IPicture[];

  constructor(
    private notificationEvent   : NotificationEventService,
    private projectEvent        : ProjectEventService,
    private imageApi            : ImageApiService,
    private actRoute            : ActivatedRoute,
    private location            : Location
  ) { }

  async ngOnInit() : Promise<void> {    
    try{

      this.actRoute.params.subscribe((p : Params) => {
        this.projectId = Number(p["id"]);
      });
      
      let source = await this.imageApi.imagesAsync(this.projectId);
      this.image = (source as IPicture[]);

      if(this.projectEvent.IsValid())
        this.model = this.projectEvent.Model!;

      if(this.model && this.image && this.image.length > 0)
        this.canRender = true;

      this.setImage(this.image[this.current].Source, this.current);
      
    }catch(e){
      console.error(e);
      this.notificationEvent.addError("Error when try to load project");
    }
  }

  sourceImages = () : Array<string> => this.image.map(x => x.Source);

  goToProjects = () : void => this.location.back();

  setImage(url : string, index : number) : void{
    this.source   = url;
    this.current  = index;
  }

  isActive(order : number) : string{
    if(order === this.current) return "active";
    return "";
  }

  ngOnDestroy(): void {
    this.notificationEvent.ngOnDestroy();
    this.imageApi.ngOnDestroy();
  }

}
