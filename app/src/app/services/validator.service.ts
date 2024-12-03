import { Inject, Injectable } from '@angular/core';
import { FORM_CONFIG } from '../settings/form.config';
import { IStatus } from '../entities/status.entity';
import { IPicture } from '../entities/picture.entity';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  message? : string;

  constructor(@Inject("FORM_CONFIG") private config : typeof FORM_CONFIG) { }

  private IsNullOrEmptyOrWhitespace(slug : string, content? : string) : boolean{
    if(!content || content! === "" || content! === " "){
      this.message = `No ${slug} or invalid`;
      return false;
    }
    return true;
  }

  private LimitReached(slug : string, content : string, limit : number) : boolean{
    if(content.length > limit){
      this.message = `${slug} reached the limit`;
      return false;
    }
    return true;
  }

  Id(id? : number) : boolean{
    
    if(!id || id! <= 0){
      this.message = "No id or negative";
      return false;
    }

    if(id === 300){
      this.message = "Fake id sent";
      return false;
    }

    return true;

  }

  Email(content? : string) : boolean{

    if(!this.IsNullOrEmptyOrWhitespace("email", content))
      return false;

    if(content!.indexOf("@") === -1 || content!.indexOf(".") === -1){
      this.message = "Email isn't in a correct format";
      return false;
    }

    return true;
  }

  Title = (content? : string) : boolean => (
    this.IsNullOrEmptyOrWhitespace("title", content) &&
    this.LimitReached("Title", content!, this.config.MaxLength.Title)
  );

  Description = (content? : string) : boolean => (
    this.IsNullOrEmptyOrWhitespace("description", content) &&
    this.LimitReached("Description", content!, this.config.MaxLength.Description)
  );

  Status(content? : IStatus, statusId? : number) : boolean {
    if(!content || !statusId){
      this.message = "Status invalid or malformed";
      return false;
    }
    return true;
  }

  Pictures(sources : IPicture[]) : boolean{
    if(sources.length <= 0){
      this.message = "Please upload at least one image";
      return false;
    }
    return true;
  }

}
