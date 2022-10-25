import React from 'react';

import { Grid } from '@entire.se/components';
import { theme } from '../../../src/styles/settings';

import * as styles from './Palettes.styles';

export const Palettes = () => {
  return (
    <Grid>
      {Object.keys(theme.palettes).map((name) => {
        const ranges = theme.palettes[name];

        return (
          <Grid.Item key={name} width={12}>
            <h2>{name}</h2>
            <styles.Items>
              <Grid fill>
                {Object.keys(ranges).map((range, index) => {
                  const color = ranges[range];

                  return (
                    <Grid.Item key={index}>
                      <styles.Item style={{ backgroundColor: color }}>
                        {color}
                      </styles.Item>
                    </Grid.Item>
                  );
                })}
              </Grid>
            </styles.Items>
          </Grid.Item>
        );
      })}
    </Grid>
  );
};
