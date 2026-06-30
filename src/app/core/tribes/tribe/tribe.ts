import {Component, EventEmitter, input, OnInit, Output} from '@angular/core';
import {TribeInfo} from '../model/tribe-info';
import {tribesData} from './tribes-data';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tribe',
  imports: [
    FormsModule
  ],
  templateUrl: './tribe.html',
  styleUrl: './tribe.scss',
})
export class Tribe implements OnInit {
  name = input<string>();
  data: TribeInfo | undefined;
  meanings: string[] = [];
  @Output() selectedMeaning = new EventEmitter<string>();

  ngOnInit() {
    this.data = tribesData.filter(tribe => {
      return tribe.name === this.name();
    })[0];
    this.meanings = this.data?.meanings || [];
  }

  selectMeaning(meaning: string) {
    this.selectedMeaning.emit(meaning);
  }
}
