import { InformationItem } from './Guide';

import { Link } from './Guide.styles';

const repoUrl = 'https://github.com/interactive-solutions/dashboard';
const prDocsUrl =
  'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork';

export const steps: InformationItem[] = [
  {
    headline: 'Skapa en fork',
    info: (
      <>
        {'Kodrepot för dashboarden och dess widgets hittar du '}
        <Link href={repoUrl}>här</Link>
        <br />
        {
          'Klicka på "Fork" och "Create a fork" för att skapa en kopia av repot, som hamnar under din github-användare.'
        }
        <br />
        {
          'När du uppdaterar forken med din kod, kommer inte original-repot att påverkas.'
        }
      </>
    ),
  },
  {
    headline: 'Hämta koden',
    info: 'Namnge din branch med uppgiften du valt samt ditt eget namn.',
    extendedInfo: `cd path-to-your-workspace
      git clone url-to-your-fork
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
    extendedInfo: `git add .
      git commit -m "your message"
      git push`,
  },
  {
    headline: 'Skapa en Pull Request',
    info: (
      <>
        {`När du känner dig färdig pushar du din branch och skapar en Pull Request.`}
        <br />
        {'Läs hur du skapar en Pull Request från en fork '}
        <Link href={prDocsUrl}>här</Link>
        <br />
        {
          'Ange "develop" som base branch - det är den branch vi vill ha som target för din Pull Request. Som compare branch anger du den branch du lagt din kodimplementation i.'
        }
      </>
    ),
  },
  {
    headline: 'Fyll i din pull request',
    info: `Skriv en beskrivning i din pull request. Använd gärna vår template för Pull Requests. Fyll i de rubriker och beskrivningar som känns tillämpbara och relevanta.`,
  },
  {
    headline: 'Skicka oss en länk',
    info: `Skicka oss en länk till din Pull Request.`,
  },
];
