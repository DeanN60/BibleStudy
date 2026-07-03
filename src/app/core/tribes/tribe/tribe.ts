import {Component, EventEmitter, input, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';
import {TribeInfo} from '../model/tribe-info';
import {tribesData} from './tribes-data';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tribe',
  imports: [
    FormsModule
  ],
  templateUrl: './tribe.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tribe.scss',
})
export class Tribe implements OnInit {
  name = input<string>();
  showStandard = input<boolean>(false);
  data: TribeInfo | undefined;
  meanings: string[] = [];
  standard: string | undefined;
  @Output() selectedMeaning = new EventEmitter<string>();

  ngOnInit() {
    this.data = tribesData.filter(tribe => {
      return tribe.name === this.name();
    })[0];
    this.meanings = this.data?.meanings || [];
    if (this.showStandard() && this.data?.standard) {
      this.standard = this.data?.standard;
    }
  }

  selectMeaning(meaning: string) {
    this.selectedMeaning.emit(meaning);
  }
}
