import { Component } from '@angular/core';
import {KeyPointsSubMenu} from './key-points-sub-menu/key-points-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-key-points',
  imports: [
    KeyPointsSubMenu
  ],
  templateUrl: './key-points.html',
  styleUrl: './key-points.scss',
})
export class KeyPoints extends BasePageWithSubtitle {
    override pageSubtitle = 'Key Points';

}
