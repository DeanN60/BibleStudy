import {Component, input} from '@angular/core';

@Component({
  selector: 'app-tribe',
  template: ''
})
export class MockTribe {
  name = input<string>();
  showStandard = input<boolean>(false);
}
