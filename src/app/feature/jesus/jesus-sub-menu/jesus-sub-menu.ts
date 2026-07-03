import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-jesus-sub-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './jesus-sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../jesus.scss',
})
export class JesusSubMenu {

}
