import { InformationItem } from './Guide';

import { Link } from './Guide.styles';

const repoUrl = 'https://git.interactivesolutions.se/internal/dashboard';

export const steps: InformationItem[] = [
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
    extendedInfo: `cd path-to-your-workspace
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
    extendedInfo: `git add .
      git commit -m "your message"
      git push`,
  },
  {
    headline: 'Skapa en Pull Request',
    info: `När du känner dig färdig pushar du din branch och skapar en Pull Request.`,
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
