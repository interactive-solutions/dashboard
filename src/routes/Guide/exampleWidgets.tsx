import { InformationItem } from './Guide';

import { Link } from './Guide.styles';

export const exampleWidgets: InformationItem[] = [
  {
    headline: 'UUID-generator',
    info: 'Skapa och visa ett slumpmässigt genererat UUID',
    extendedInfo:
      'Widgeten skulle vara användbar när till exempel nya rader ska läggas till i en databas manuellt. Utökade funktioner kan vara att kunna bulk-generera UUID:s och en knapp som genererar ett nytt UUID',
  },
  {
    headline: 'JWT-parser 🤔',
    info: 'Avkoda JWT-token och visa dess innehåll',
    extendedInfo:
      'JWT (JSON Web Token) är en hashad token som används för att dela information och autentisera mellan en klient och server. Det kan vara nyttigt att i till exempel buggjakt kunna avkoda en JWT-token för att se hur en klient framställer sig till en server',
  },
  {
    headline: 'Timer',
    info: 'En helt vanlig timer',
    extendedInfo:
      'Lämplig när man behöver koka ägg eller verkligen inte vill missa ett viktigt möte. En utmaning här blir att finna ett bra sätt att visa för användaren att timern nått noll, konfettiregn?',
  },
  {
    headline: 'JavaScript array methods',
    info: '"Cheat sheet" för vanliga JavaScript array methods',
    extendedInfo:
      'Här avses ex. map, forEach, find, every, reduce, etc. Vilka finns, vad gör dem och vilka parametrar är tillgängliga? Vilken information som är relevant och hur den ska visas är upp till den som väljer att implementera. Ett exempel kan vara att visa varje array method i en dropdown och beroende på val rendera valets specifika information',
  },
  {
    headline: 'Google search',
    info: 'Skriv in sökning och länkas till svaren',
    extendedInfo:
      'Utvecklarens bästa vän? En widget där användaren kan skriva in sin google sökning och länkas fram till resultatet',
  },
  {
    headline: 'TypeScript playground 🤔',
    info: 'Exekvera kod hos klienten',
    extendedInfo:
      'Skapa en TypeScript REPL där man kan testa kodsnuttar. Vad blir egentligen 0.1 + 0.2? Som minst krävs ett inputfält och något som kan läsa och exekvera vad som skrivits. Ytterligare stilpoäng på en redan svår uppgift är att implementera syntax highlighting och code completion',
  },
  {
    headline: 'Väder',
    info: 'En väderwidget',
    extendedInfo:
      'Visa väder eller temperatur i någon form med hjälp av tillgängliga API:er. Här kan du till exempel läsa ut var användaren sitter och visa aktuell temperatur. En annan implementering skulle kunna visa morgondagens väder i Samarkand.',
  },
  {
    headline: 'Klocka',
    info: 'En klocka',
    extendedInfo:
      'För en extra utmaning visa vad klockan är på andra platser än i Sverige.',
  },
  {
    headline: 'TypeScript Cheat Sheet',
    info: 'Fusklapp till TypeScript syntax',
    extendedInfo:
      'På bland annat TypeScripts hemsida finns det färdiga fusklappar i bildformat. Sådana går att använda, till exempel genom att först visa tumnaglar och förstora bilderna vid klick. En annan lösning vore att skriva exempel för hand och då ta hjälp av ett library för syntax highlighting',
  },
  {
    headline: 'Kattbilder',
    info: 'Slumpa fram bilder på katter!',
    extendedInfo: (
      <>
        Ska man hämta en ny katt med tidsintervall eller knapptryck? Ett möjligt
        API finns på{' '}
        <Link href="https://developers.thecatapi.com">
          developers.thecatapi.com
        </Link>
      </>
    ),
  },
];
