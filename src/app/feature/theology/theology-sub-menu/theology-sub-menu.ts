import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-theology-sub-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './theology-sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../theology.scss',
})
export class TheologySubMenu {

}
