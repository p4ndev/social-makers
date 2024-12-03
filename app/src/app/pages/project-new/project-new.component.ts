import { Component, DoCheck, ElementRef, EventEmitter, Inject, OnDestroy, ViewChild } from '@angular/core';
import { IPicture } from 'src/app/entities/picture.entity';
import { IProject } from 'src/app/entities/project.entity';
import { ISignature } from 'src/app/entities/signature.entity';
import { IStatus } from 'src/app/entities/status.entity';
import { NotificationEventService } from 'src/app/services/events/notification.service';
import { SaveEventService } from 'src/app/services/events/save.service';
import { UploadEventService } from 'src/app/services/events/upload.service';
import { ImageApiService } from 'src/app/services/media/image-api.service';
import { ProviderApiService } from 'src/app/services/media/provider-api.service';
import { PlatformApiService } from 'src/app/services/platform/platform-api.service';
import { ValidatorService } from 'src/app/services/validator.service';
import { FORM_CONFIG } from 'src/app/settings/form.config';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.sass']
})
export class ProjectNewComponent implements DoCheck, OnDestroy {
  
  pid?  : number;
  model : IProject;
  pics  : Array<IPicture>;
  files : FileList | undefined | null;
  forceReset$ = new EventEmitter<void>();

  private saving      : boolean;
  private uploading   : boolean;
  private signature?  : ISignature;
  @ViewChild("imageInput") private imageInput! : ElementRef<HTMLInputElement>;
  
  constructor(
    @Inject("FORM_CONFIG") public config : typeof FORM_CONFIG,
    private notification      : NotificationEventService,
    private validator         : ValidatorService,

    private uploadEvent       : UploadEventService,
    private saveEvent         : SaveEventService,
    
    private platformApi       : PlatformApiService,
    private mediaProviderApi  : ProviderApiService,
    private imageApi          : ImageApiService
  ){
    this.model      = this.init();
    this.saving     = false;
    this.uploading  = false;
    this.pics       = [];
  }

  private init() : IProject{
    return {
      StatusId: 0,        Inventory: "",        Price: "",
      Title: "",          UserId: "",           Description: ""
    };
  }

  ngDoCheck() : void {
    this.saveHandler();
    this.uploadHandler();
  }

  ngOnDestroy(): void {
    this.imageApi.ngOnDestroy();
    this.platformApi.ngOnDestroy();
    this.mediaProviderApi.ngOnDestroy();
  }
  
  private releaseAdminMenu    = () : void => {
    this.uploadEvent.Toggle();
    this.uploading = false;
  }

  async saveHandler() : Promise<void> {
    try{
      
      if(this.saving || !this.saveEvent.State) return;

      await this.onModelValidating();
  
      this.notification.addWarning("Sending data, please wait...");
      this.saving = true;

      if(!this.pid){
        this.pid = await this.platformApi.projectAsync(this.model);
        for(let i = 0; i < this.pics.length; i++){
          this.pics[i].ProjectId  = this.pid;
          this.pics[i].Id         = undefined;
        }
      }

      await this.imageApi.addAsync(this.pics);

      this.pics         = [];
      this.forceReset$.emit();
      this.model        = this.init();
      this.model.Status = undefined;

      this.saving = false;
      this.pid    = undefined;
      this.saveEvent.Toggle();

      this.notification.addSuccess("Published successfully!!!");
      
    }catch(e){

      let errorMessage : string = "";

      if(this.validator.message)
        errorMessage = this.validator.message;
      else if(typeof e === "string")
        errorMessage = e;

      if(this.pid){
        this.saving = false;
        this.saveEvent.Toggle();
        errorMessage = "Error when register images, try again later";
      }

      if(errorMessage !== "")
        this.notification.addError(errorMessage);

    }
  }

  async uploadHandler() : Promise<void>{
    try{

      if(this.uploading || !this.uploadEvent.State) return;

      this.notification.addWarning("Configuring, please wait");
      this.uploading = true;

      this.signature = await this.imageApi.signatureAsync();
      this.imageInput.nativeElement.click();
      this.releaseAdminMenu();
    
    }catch(e){

      this.notification.addError("Server doesn't allow upload");
      this.releaseAdminMenu();
      
    }    
  }

  async onModelValidating() : Promise<string | void>{

    if(
      !this.validator.Title(this.model.Title)                           ||
      !this.validator.Description(this.model.Description)               ||
      !this.validator.Status(this.model.Status, this.model.StatusId)    ||
      !this.validator.Pictures(this.pics)
    ){
      this.saveEvent.Toggle();
      return Promise.reject();
    }

    return Promise.resolve();

  }

  onStatusChanged(model : IStatus | undefined) : void{
    this.model.StatusId = (model ? model.Id! : undefined);
    this.model.Status = model;
  }

  onFileSelected() : void{
    
    if(!this.signature) {
      this.notification.addError("Upload didn't setup properly");
      return;
    }

    this.files = this.imageInput.nativeElement.files;

    if(this.files && this.files.length > 0){

      this.notification.addWarning("Start uploading: " + this.files![0].name);

      this.mediaProviderApi
        .uploadAsync(this.files![0], this.signature!)
          .then((model : IPicture | string) => {
            if(typeof model === "string")
              this.notification.addWarning(model);
            else{
              model.Order = this.pics.length;
              this.pics.push(model);
              this.notification.addSuccess("Image successfuly uploaded");
            }
          })
          .catch((message : string) => this.notification.addError(message))
          .finally(() => {
            this.imageInput.nativeElement.value = "";
            this.files = undefined;
          });
          
    }

  }

}