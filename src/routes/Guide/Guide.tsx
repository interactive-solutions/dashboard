import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { SEO } from 'components/tools';

import { exampleWidgets } from './exampleWidgets';
import { steps } from './steps';

import * as styles from './Guide.styles';

export type InformationItem = {
  headline: string;
  info: string | ReactElement;
  extendedInfo?: string | ReactElement;
};

export const Guide = () => {
  return (
    <styles.Root>
      <SEO title="Guide för kodprov" />
      <styles.HeroContainer>
        <styles.HeroInfo>
          <Typography variant="h1">Entires</Typography>
          <Typography variant="h1" color="primary">
            Kodprov
          </Typography>
          <styles.HeroText>
            Under fliken ”Dashboard” finns en samling widgets skapade av
            medarbetare på Entire. Din uppgift är att skapa en sådan widget.
            Exempel på widgets att bygga finns längre ner, svårare widgets är
            markerade med 🤔. Uppgiften ska inte ta mer än en dag att göra.
          </styles.HeroText>
        </styles.HeroInfo>
        <styles.Image src="images/hero.png" alt="colleagues" />
      </styles.HeroContainer>
      <styles.SectionHeader id="Tillvägagångssätt" variant="h2">
        Tillvägagångssätt
      </styles.SectionHeader>
      <styles.List>
        {steps.map(({ headline, info, extendedInfo }) => (
          <styles.ListItem>
            <styles.ListItemLeft>
              <Typography variant="h3">{headline}</Typography>
              {info}
            </styles.ListItemLeft>
            <styles.Code>{extendedInfo}</styles.Code>
          </styles.ListItem>
        ))}
      </styles.List>
      <styles.SectionHeader id="widgets" variant="h2">
        Widgets
      </styles.SectionHeader>
      <styles.List>
        {exampleWidgets.map(({ headline, info, extendedInfo }) => (
          <styles.ListItem>
            <styles.ListItemLeft>
              <Typography variant="h3">{headline}</Typography>
              {info}
            </styles.ListItemLeft>
            <div>{extendedInfo}</div>
          </styles.ListItem>
        ))}
      </styles.List>
    </styles.Root>
  );
};
