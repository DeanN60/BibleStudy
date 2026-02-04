import {Component, input} from '@angular/core';
import {VerseData} from './verse-data';

@Component({
  selector: 'app-verse',
  imports: [],
  templateUrl: './verse.html',
  styleUrl: './verse.scss',
})
export class Verse {
  data = input.required<VerseData>();
}
