import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import {AccordionPreset} from './components/accordion-preset';
import {Semantic} from './semantic';
import {Primitive} from './primitive';

export const MyThemePreset = definePreset(Aura, Primitive, Semantic, {
  components: {
    accordion: AccordionPreset
  }
});
