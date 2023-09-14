import React, { useEffect, useState } from 'react';

import { Loading } from 'components/table/BasicTable/subcomponents';

import { Container, ImageContainer, Image, Button } from './Memes.styles';

type Meme = {
  url: string;
  title: string;
};

export const Memes = () => {
  const [meme, setMeme] = useState<Meme>();
  const [loading, setLoading] = useState(true);

  const getMeme = async () => {
    setLoading(true);
    const result = await fetch('https://meme-api.com/gimme/ProgrammerHumor');
    const { url, title }: Meme = await result.json();

    setMeme({ url, title });
    setLoading(false);
  };

  useEffect(() => {
    getMeme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ImageContainer>
        {loading ? (
          <Loading visible />
        ) : (
          <Image src={meme?.url || ''} alt={meme?.title || ''}></Image>
        )}
      </ImageContainer>
      <Button type="button" onClick={getMeme}>
        Give me a meme
      </Button>
    </Container>
  );
};
