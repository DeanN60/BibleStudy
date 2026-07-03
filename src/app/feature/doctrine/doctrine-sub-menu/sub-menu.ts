import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-doctrine-sub-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../doctrine.scss',
})
export class SubMenu {

}
