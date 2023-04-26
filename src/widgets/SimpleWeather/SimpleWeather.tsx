import React from 'react';

import Image from 'next/image';

export const SimpleWeather = () => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        // width: '100%',
        // height: '100%',
      }}
    >
      <Image
        src="/images/hot.gif"
        height={400}
        width={400}
        alt="hot weather forecast"
      />
    </div>
  );
};
