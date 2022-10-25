import { createGlobalStyle } from 'styled-components';

import { progressBar } from './components';
import { headings, links } from './elements';
import { normalize, reset, scaffolding, placeholder } from './generic';

export const Global = createGlobalStyle`
  ${normalize}
  ${reset}
  ${scaffolding}
  ${placeholder}
  ${headings}
  ${links}
  ${progressBar}
`;
