import React, { useEffect, useState } from 'react';

import { Loading } from 'components/ui/table/BasicTable/subcomponents';

import * as styles from './Memes.styles';

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
    <styles.Container>
      <styles.ImageContainer>
        {loading ? (
          <Loading visible />
        ) : (
          <styles.Image
            src={meme?.url || ''}
            alt={meme?.title || ''}
          ></styles.Image>
        )}
      </styles.ImageContainer>
      <styles.Button type="button" onClick={getMeme}>
        {'Give me a meme'.toString()}
      </styles.Button>
    </styles.Container>
  );
};
