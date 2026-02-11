import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from '@core/footer';
import {Header} from '@core/header';
import {Menu} from '@core/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BibleStudy');
}
