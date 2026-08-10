import {Component, input} from '@angular/core';
import {iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-definition',
  template: ''
})
export class MockDefinition {
  default = {
    source: 'unknown',
    term: 'Test',
    type: "noun",
    definitions: [
      {def: "Test 1"},
      {def: "Test 2"},
      {def: "Test 3"}
    ]
  } as iDefinition;
  data = input<iDefinition>(this.default);
}
