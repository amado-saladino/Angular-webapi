import { trigger, style, transition, animate, group } from '@angular/animations';

export const animation = trigger('listAnimation', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])