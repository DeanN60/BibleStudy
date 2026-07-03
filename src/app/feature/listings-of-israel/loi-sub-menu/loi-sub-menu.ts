import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-loi-sub-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './loi-sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './loi-sub-menu.scss',
})
export class LoiSubMenu {

}
