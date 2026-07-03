import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {HeaderService} from '@core/header.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  headerService = inject(HeaderService);
}
