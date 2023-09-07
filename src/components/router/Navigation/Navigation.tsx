import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

import { BigLogo } from 'assets/icons';

import {
  Header,
  NavBar,
  ContainedButton,
  TextButton,
  Container,
  Logo,
} from './Navigation.styles';

export const Navigation = () => {
  const router = useRouter();

  return (
    <Header>
      <Container>
        <BigLogo />
        <NavBar>
          <Logo />
          <TextButton variant="text" href="/">
            Dashboard
          </TextButton>
          <TextButton variant="text" href="/guide">
            Guide
          </TextButton>
          <TextButton
            variant="text"
            onClick={() => router.push('https://www.entire.se')}
          >
            Company
          </TextButton>
          <ContainedButton
            onClick={() => router.push('https://www.entire.se/contact')}
            endIcon={<ArrowForwardIcon />}
          >
            Get in touch
          </ContainedButton>
        </NavBar>
      </Container>
    </Header>
  );
};
