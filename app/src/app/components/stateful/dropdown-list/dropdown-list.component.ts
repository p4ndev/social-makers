import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FORM_CONFIG } from 'src/app/settings/form.config';
import { IStatus } from 'src/app/entities/status.entity';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html'
})
export class DropdownlistComponent implements OnInit{
  
  content?  : IStatus;
  source    : Array<IStatus> = [];

  @Input("shouldResetCallback") reset$ : undefined | EventEmitter<void>;
  @Output() onChanged = new EventEmitter<IStatus | undefined>();

  constructor(@Inject("FORM_CONFIG") public helper : typeof FORM_CONFIG) { }

  ngOnInit() : void {
    
    this.source = this.helper.Source;
    
    this.resetModel();
    this.reset$?.subscribe(() => {
      this.resetModel();
    });

  }

  onInput() : void{
    
    if(this.content && this.content.Name.length > 5){
      let tmp : IStatus | undefined = this.source.find(x => x.Name === this.content!.Name);
      if(tmp)
        this.content.Id = tmp.Id;
      else
        this.resetModel();
    }else
      this.resetModel();

    this.onChanged.emit(
      (this.content && this.content.Id === 0) ? undefined : this.content
    );

  }

  resetModel() : void{
    this.content = { Id: 0, Name: "" };
  }

}