import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {john_6_37, john_6_44} from '@core/books/John/john_6';

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
export class IrresistibleGrace {

  protected readonly john_6_44 = john_6_44;
  protected readonly john_6_37 = john_6_37;
}
