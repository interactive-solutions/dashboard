import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { SEO } from 'components/tools';

import { exampleWidgets } from './exampleWidgets';
import { steps } from './steps';

import {
  Root,
  HeroContainer,
  HeroInfo,
  HeroText,
  Image,
  SectionHeader,
  List,
  ListItem,
  ListItemLeft,
  Code,
  ListItemHeader,
} from './Guide.styles';

export type InformationItem = {
  headline: string;
  info: string | ReactElement;
  extendedInfo?: string | ReactElement;
};

export const Guide = () => {
  return (
    <Root>
      <SEO title="Guide för kodprov" />
      <HeroContainer>
        <HeroInfo>
          <Typography variant="h1">Entires</Typography>
          <Typography variant="h1" color="primary">
            Kodprov
          </Typography>
          <HeroText>
            Under fliken ”Dashboard” finns en samling widgets skapade av
            medarbetare på Entire. Din uppgift är att skapa en sådan widget.
            Exempel på widgets att bygga finns längre ner, svårare widgets är
            markerade med 🤔. Uppgiften ska inte ta mer än en dag att göra.
          </HeroText>
        </HeroInfo>
        <Image src="images/hero.png" alt="colleagues" />
      </HeroContainer>
      <SectionHeader id="Tillvägagångssätt" variant="h2">
        Tillvägagångssätt
      </SectionHeader>
      <List>
        {steps.map(({ headline, info, extendedInfo }) => (
          <ListItem>
            <ListItemLeft>
              <ListItemHeader variant="h3">{headline}</ListItemHeader>
              {info}
            </ListItemLeft>
            <Code>{extendedInfo}</Code>
          </ListItem>
        ))}
      </List>
      <SectionHeader id="widgets" variant="h2">
        Widgets
      </SectionHeader>
      <List>
        {exampleWidgets.map(({ headline, info, extendedInfo }) => (
          <ListItem>
            <ListItemLeft>
              <ListItemHeader variant="h3">{headline}</ListItemHeader>
              {info}
            </ListItemLeft>
            <div>{extendedInfo}</div>
          </ListItem>
        ))}
      </List>
    </Root>
  );
};
