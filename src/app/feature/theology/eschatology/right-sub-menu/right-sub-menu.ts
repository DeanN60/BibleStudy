import {Component, input} from '@angular/core';
import {ClickOpen} from '@core/directive/click-open';

@Component({
  selector: 'app-right-sub-menu',
  imports: [
    ClickOpen
  ],
  templateUrl: './right-sub-menu.html',
  styleUrl: '../eschatology.scss',
  standalone: true
})
export class RightSubMenu {
  showViews = input<boolean>(false);
}
