import { Component, Inject } from '@angular/core';
import { BADGE_CONFIG } from 'src/app/services/badge.config';

@Component({
  selector: 'app-badge-pause',
  template: `<em [class]="helper.Wrap + ' primary-bg-color'">Pausado</em>`
})
class BadgePauseComponent {
  constructor(@Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG) { }
}

@Component({
  selector: 'app-badge-progress',
  template: `<em [class]="helper.Wrap + ' secondary-bg-color'">Em progresso</em>`
})
class BadgeProgressComponent {
  constructor(@Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG) { }
}

@Component({
  selector: 'app-badge-done',
  template: `<em [class]="helper.Wrap + ' tertiary-bg-color text-white'">Concluído</em>`
})
class BadgeDoneComponent { 
  constructor(@Inject("BADGE_CONFIG") public helper : typeof BADGE_CONFIG) { }
}

export { BadgePauseComponent, BadgeProgressComponent, BadgeDoneComponent }