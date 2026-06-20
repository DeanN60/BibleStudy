import {Component, input} from '@angular/core';
import {wordType} from '@core/definition/word-type';
import {iDefinitionInfo} from '@core/definition/definition-info';
import {OpenTrigger} from '@core/directive/open-trigger';

export interface iDefinition {
  source: string;
  term: string;
  type: wordType;
  definitions: iDefinitionInfo[];
}

@Component({
  selector: 'app-definition',
  imports: [
    OpenTrigger
  ],
  templateUrl: './definition.html',
  styleUrl: './definition.scss',
})
export class Definition {
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
