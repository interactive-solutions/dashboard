import React, { ReactElement } from 'react';

import { Layout } from 'components/general';
import { SEO } from 'components/tools';

import {
  Link,
  Root,
  HeroContainer,
  HeroInfo,
  HeroText,
  Text,
  Image,
  Code,
  ListItemHeadline,
  ListItem,
  ListItemContainer,
  HeaderFirstLine,
  HeaderSecondLine,
  HeadLine,
} from './Guide.styles';

const repoUrl = 'https://git.interactivesolutions.se/internal/dashboard';

const tasks: Array<{ name: string; info: string }> = [
  { name: 'Widget 1', info: 'Här är info' },
  { name: 'Widget 2', info: 'Här är info' },
  { name: 'Widget 3', info: 'Här är info' },
  { name: 'Widget 4', info: 'Här är info' },
];

const steps: Array<{
  headline: string;
  info: string | ReactElement;
  examples?: string;
}> = [
  {
    headline: 'Hämta koden',
    info: (
      <>
        {'Kodrepot för dashboarden och dess widgets hittar du '}
        <Link href={repoUrl}>här</Link>
        <br />
        {'Namnge din branch med uppgiften du valt samt ditt eget namn.'}
      </>
    ),
    examples: `cd path-to-your-workspace
      git clone ${repoUrl}
      cd dashboard/
      git checkout -b widget1/kalle-johansson`,
  },
  {
    headline: 'Bygg en widget',
    info: `Skapa din implementation. Se README för kodspecifika instruktioner och setup av projektet lokalt.`,
  },
  {
    headline: 'Ladda upp din kod',
    info: `Du får gärna dela upp din implementation i flera commits, och du kan pusha koden till din remote branch under arbetets gång om du önskar. Vi kommer att titta först när du meddelat oss att du är klar.`,
    examples: `git add .
      git commit -m "your message"
      git push`,
  },
  {
    headline: 'Skapa en Pull Request',
    info: `När du känner dig färdig pushar du din branch och skapar en Merge Request.`,
  },
  {
    headline: 'Fyll i din pull request',
    info: `Skriv en beskrivning i din pull request. Använd gärna den template för Pull Requests som går att välja ... . Fyll i de rubriker och beskrivningar som känns tillämpbara och relevanta.`,
  },
  {
    headline: 'Skicka oss en länk',
    info: `Skicka länk till din Pull Request till ... .`,
  },
];

export const Guide = () => {
  return (
    <Root>
      <SEO title="Guide för kodprov" />
      <HeroContainer>
        <HeroInfo>
          <HeaderFirstLine>Entires</HeaderFirstLine>
          <HeaderSecondLine>Kodprov</HeaderSecondLine>
          <HeroText>
            Under fliken ”Dashboard” finns en samling widgets skapade av
            medarbetare på Entire. Din uppgift är att skapa en sådan widget.
            Uppgiften ska inte ta mer än en dag att göra.
          </HeroText>
        </HeroInfo>
        <Image src={'images/hero.png'} alt={'colleagues'}></Image>
      </HeroContainer>
      <HeadLine>Tillvägagångssätt</HeadLine>
      {steps.map((step, i) => (
        <ListItem>
          <ListItemHeadline>{`${i + 1}. ${step.headline}`}</ListItemHeadline>
          <ListItemContainer>
            <Text>{step.info}</Text>
            <Text>
              <Code>{step.examples}</Code>
            </Text>
          </ListItemContainer>
        </ListItem>
      ))}
      <HeadLine>Widgets</HeadLine>
      {tasks.map((task) => (
        <ListItem>
          <ListItemContainer>
            <ListItemHeadline>{task.name}</ListItemHeadline>
            <Text>{task.info}</Text>
          </ListItemContainer>
        </ListItem>
      ))}
    </Root>
  );
};
