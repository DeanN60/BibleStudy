import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-sub-menu',
    imports: [
        RouterLink
    ],
  templateUrl: './home-sub-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../home.scss',
})
export class HomeSubMenu {

}
