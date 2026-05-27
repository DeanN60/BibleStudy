import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Footer} from '@core/footer';
import {Header} from '@core/header';
import {Menu} from '@core/menu';
import {MyThemePreset} from './theme/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  ngOnInit(): void {
    console.log('MyThemePreset:color', MyThemePreset.primitive)
    console.log('MyThemePreset:css', MyThemePreset.css)
    console.log('MyThemePreset:Semantic ', MyThemePreset.semantic);
    console.log('MyThemePreset:accordion', MyThemePreset.components?.accordion);
  }

  protected readonly title = signal('BibleStudy');
}
