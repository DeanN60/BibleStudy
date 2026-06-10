import {Component} from '@angular/core';
import {JesusSubMenu} from "./jesus-sub-menu/jesus-sub-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-jesus',
  imports: [
    JesusSubMenu
  ],
  templateUrl: './jesus.html',
  styleUrl: './jesus.scss',
})
export class Jesus extends BasePageWithSubtitle {
    override pageSubtitle = "Jesus";

}
