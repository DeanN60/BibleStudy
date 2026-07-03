import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-time-lines-sub-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './time-lines-sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../time-lines.scss',
})
export class TimeLinesSubMenu {

}
