import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {john_6_37, john_6_44} from '@core/books/John/john_6';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-irresistible-grace',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './irresistible-grace.html',
  styleUrl: '../calvinism.scss',
})
export class IrresistibleGrace extends BasePageWithSubtitle {
  override pageSubtitle = "Irresistible Grace";

  protected readonly john_6_44 = john_6_44;
  protected readonly john_6_37 = john_6_37;
}
