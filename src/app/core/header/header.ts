import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {HeaderService} from '@core/header.service';
import {ThemeToggle} from '@core/theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [
    ThemeToggle
  ],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  headerService = inject(HeaderService);
}
