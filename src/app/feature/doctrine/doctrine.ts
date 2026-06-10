import {Component} from '@angular/core';
import {SubMenu} from './doctrine-sub-menu/sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-doctrine',
  imports: [
    SubMenu
  ],
  templateUrl: './doctrine.html',
  styleUrl: './doctrine.scss',
})
export class Doctrine extends BasePageWithSubtitle {
  override pageSubtitle = "Doctrine";
}
