import React, { useMemo } from 'react';

import { Grid } from '@entire.se/components';
import { upperCaseFirstLetter } from '@entire.se/utils';

import { theme } from '../../../src/styles/settings';

import * as styles from './Surfaces.styles';

export const Surfaces = () => {
  const surfacesWithoutOn = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(theme.surfaces).filter(([key]) => !key.includes('on'))
      ),
    []
  );

  return (
    <Grid fill>
      {Object.keys(surfacesWithoutOn).map((surface) => {
        const background = theme.surfaces[surface];
        const foreground = theme.surfaces[`on${upperCaseFirstLetter(surface)}`];

        return (
          <Grid.Item key={surface}>
            <styles.Item
              style={{ backgroundColor: background, color: foreground }}
            >
              <div>{surface}</div>
            </styles.Item>
          </Grid.Item>
        );
      })}
    </Grid>
  );
};
