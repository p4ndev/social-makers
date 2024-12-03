import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FORM_CONFIG } from 'src/app/settings/form.config';

@Component({
    selector: 'app-input',
    template: `
        
        <input 
            *ngIf="!multiline" [type]="typeAttribute" [disabled]="disabled" [placeholder]="placeholder"
            [class]="helper.Wrap" [(ngModel)]="content" (input)="onInputChanged()"
            [attr.maxlength]="maxLength" />

        <textarea
            *ngIf="multiline" cols="30" rows="5" [class]="helper.Wrap" [disabled]="disabled"
            [placeholder]="placeholder" [(ngModel)]="content" (input)="onInputChanged()"
            [attr.maxlength]="maxLength"></textarea>
            
    `
})
export class InputComponent implements OnInit{

    @Input()    maxLength?     : number;
    @Input()    placeholder?   : string;
    @Input()    content        : string = "";
    @Input()    disabled       : boolean = false;
    @Input()    multiline      : boolean = false;
    @Input()    number         : boolean = false;
    @Output()   contentChange = new EventEmitter<string>();

    typeAttribute : string = "text";

    constructor(@Inject("FORM_CONFIG") public helper : typeof FORM_CONFIG) { }

    ngOnInit() : void {
        if(this.number) this.typeAttribute = "number";
    }

    onInputChanged = () : void => {
        if(!this.disabled)
            this.contentChange.emit(this.content);
    };

}