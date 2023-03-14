import { Component, Input } from '@angular/core';
import { EBadgeStatus } from 'src/app/entities/badge.enum';

@Component({
  selector: 'app-badge-box',
  templateUrl: './badge-box.component.html',
  styleUrls: ['./badge-box.component.css']
})
export class BadgeBoxComponent {
  
  @Input() status : EBadgeStatus = EBadgeStatus.None;

  isPause     = () : boolean => this.status === EBadgeStatus.Pause;
  isProgress  = () : boolean => this.status === EBadgeStatus.Progress;
  isDone      = () : boolean => this.status === EBadgeStatus.Done;
  
}
