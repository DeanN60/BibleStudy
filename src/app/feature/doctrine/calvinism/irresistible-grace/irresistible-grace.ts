import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {john_6_37, john_6_44} from '@books/John/john_6';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';

@Component({
  selector: 'app-irresistible-grace',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './irresistible-grace.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../calvinism.scss',
})
export class IrresistibleGrace extends BasePageWithSubtitle {
  override pageSubtitle = "Irresistible Grace";

  protected readonly john_6_44 = john_6_44;
  protected readonly john_6_37 = john_6_37;
}
