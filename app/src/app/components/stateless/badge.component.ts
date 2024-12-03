import { Component, Inject } from '@angular/core';
import { BADGE_CONFIG } from 'src/app/settings/badge.config';
import { STATUS } from 'src/app/settings/status.config';

@Component({
  selector: 'app-badge-pause',
  template: `<em [class]="helper.Wrap + ' primary-bg-color'">{{ labels[1].Name }}</em>`
})
class BadgePauseComponent {
  constructor(
    @Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG,
    @Inject("STATUS") public labels : typeof STATUS
  ) { }
}

@Component({
  selector: 'app-badge-progress',
  template: `<em [class]="helper.Wrap + ' secondary-bg-color'">{{ labels[0].Name }}</em>`
})
class BadgeProgressComponent {
  constructor(
    @Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG,
    @Inject("STATUS") public labels : typeof STATUS
  ) { }
}

@Component({
  selector: 'app-badge-done',
  template: `<em [class]="helper.Wrap + ' tertiary-bg-color text-white'">{{ labels[2].Name }}</em>`
})
class BadgeDoneComponent { 
  constructor(
    @Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG,
    @Inject("STATUS") public labels : typeof STATUS
  ) { }
}

export { BadgePauseComponent, BadgeProgressComponent, BadgeDoneComponent }