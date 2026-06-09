import {Component, inject} from '@angular/core';
import {HeaderService} from '@core/header.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  headerService = inject(HeaderService);
}
