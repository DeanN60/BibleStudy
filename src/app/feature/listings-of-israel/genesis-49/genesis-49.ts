import { Component } from '@angular/core';
import {LoiSubMenu} from "../loi-sub-menu/loi-sub-menu";
import {Tribe} from '../../../core/tribes/tribe/tribe';

@Component({
  selector: 'app-genesis-49',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './genesis-49.html',
  styleUrl: '../listings-of-israel.scss',
})
export class Genesis49 {
  // protected rubenMeaning: string | undefined;
  protected simeonMeaning: string | undefined;
  protected leviMeaning: string | undefined;
  protected judahMeaning: string | undefined;
  protected zebulunMeaning: string | undefined;
  protected issacharMeaning: string | undefined;
  protected danMeaning: string | undefined;
  protected gadMeaning: string | undefined;
  protected asherMeaning: string | undefined;
  protected naphtaliMeaning: string | undefined;
  protected josephMeaning: string | undefined;
  protected benjaminMeaning: string | undefined;

  protected rubenMeaning() {

  }
}
