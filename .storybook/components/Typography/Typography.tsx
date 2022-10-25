import React from 'react';

import {
  Typography as TypographyComponent,
  TypographyProps
} from '@entire.se/components';

import { theme } from '../../../src/styles/settings';

import * as styles from './Typography.styles';

export const Typography = () => {
  return (
    <div>
      {Object.keys(theme.typography).map((type) => {
        const ranges = theme.typography[type];

        return (
          <div key={type}>
            <h2>{type}</h2>
            <styles.Items>
              {Object.keys(ranges).map((range) => {
                const getType = `${type}-${range}`;
                return (
                  <div key={getType}>
                    <TypographyComponent
                      type={getType as TypographyProps['type']}
                    >
                      {getType}
                    </TypographyComponent>
                  </div>
                );
              })}
            </styles.Items>
          </div>
        );
      })}
    </div>
  );
};
