import { ReactElement } from 'react';

import { Layout } from 'components/general';
import { SEO } from 'components/tools';

import * as styles from './Guide.styles';

const repoUrl = 'https://git.interactivesolutions.se/internal/dashboard';

const tasks: Array<{ name: string; info: string }> = [
  { name: 'Widget 1', info: 'Här är info' },
  { name: 'Widget 2', info: 'Här är info' },
  { name: 'Widget 3', info: 'Här är info' },
  { name: 'Widget 4', info: 'Här är info' },
];

const steps: Array<{ info: string | ReactElement; examples?: string }> = [
  {
    info: (
      <>
        Kodrepot för dashboarden och dess widgets hittar du
        <styles.Link href={repoUrl}>här</styles.Link>
      </>
    ),
  },
  {
    info: `Skapa din implementation. Se README för kodspecifika instruktioner 
      och setup av projektet lokalt.`,
  },
  {
    info: `Du får gärna dela upp din implementation i flera commits, och du kan
      pusha koden till din remote branch under arbetets gång om du önskar.
      Vi kommer att titta först när du meddelat oss att du är klar.`,
  },
  {
    info: `När du känner dig färdig pushar du din branch och skapar en Merge Request.`,
  },
  {
    info: `Skriv en beskrivning i din Merge request. Använd gärna den template
      för Merge Requests som går att välja under. Fyll i de rubriker och
      beskrivningar som känns tillämpbara och relevanta.`,
  },
  { info: `Skicka länk till din merge request till.` },
];

export const Guide = () => {
  return (
    <styles.Root>
      <SEO title="Guide för kodprov" />
      <Layout>
        <styles.Header>Välkommen till ditt kodprov för Entire! </styles.Header>
        <styles.Text>
          Under fliken ”Dashboard” finns en samling widgets skapade av
          medarbetare på Entire. Din uppgift är att skapa en sådan widget.
          Uppgiften ska inte ta mer än en dag att göra.
        </styles.Text>
        <styles.HeadLine>Du kan välja mellan följande widgets:</styles.HeadLine>
        <styles.List>
          {tasks.map((task) => (
            <styles.ListItem>
              <styles.BoldText>{task.name}</styles.BoldText>
              <styles.Text>{task.info}</styles.Text>
            </styles.ListItem>
          ))}
        </styles.List>
        <styles.HeadLine>Tillvägagångssätt</styles.HeadLine>
        <styles.Text>
          Kortfattat kommer du att klona repot för dashboarden, skapa din
          implementation i en egen branch, och sen skapa en Merge Request i
          GitLab (motsvarar Pull Request i GitHub) som du skickar till oss.
        </styles.Text>
        <styles.BoldText>Stegen i mer detalj:</styles.BoldText>
        <styles.List>
          {steps.map((step) => (
            <styles.ListItem>
              <styles.Text>{step.info}</styles.Text>
            </styles.ListItem>
          ))}
        </styles.List>
        <styles.BoldText>Stort lycka till och ha så kul!</styles.BoldText>
      </Layout>
    </styles.Root>
  );
};
