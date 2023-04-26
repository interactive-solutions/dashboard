import React, { useState } from 'react';

import { WidthProvider, Responsive } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import { Logo } from 'widgets/Logo';
import { LoremIpsum } from 'widgets/LoremIpsum';
import { LunchToday } from 'widgets/LunchToday/LunchToday';
import { Quotes } from 'widgets/Quotes';
import { SimpleWeather } from 'widgets/SimpleWeather';

const ReactGridLayout = WidthProvider(Responsive);

export const GridLayout = () => {
  const [layout, setLayout] = useState([
    { i: 'item1', x: 0, y: 0, w: 3, h: 3 },
    { i: 'item2', x: 3, y: 0, w: 3, h: 3 },
    { i: 'item3', x: 6, y: 0, w: 3, h: 3 },
    { i: 'item4', x: 9, y: 0, w: 3, h: 3 },
    { i: 'item5', x: 12, y: 0, w: 3, h: 3 },
  ]);

  const onLayoutChange = (newLayout: any) => {
    setLayout(newLayout);
  };

  return (
    <ReactGridLayout
      className="layout"
      layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={50}
      onLayoutChange={onLayoutChange}
      draggableHandle=".handle"
      compactType={null}
      style={{
        backgroundColor: '#390115',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        key="item1"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LunchToday />
      </div>
      <div
        key="item2"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LoremIpsum />
      </div>
      <div
        key="item3"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Quotes />
      </div>
      <div
        key="item4"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {'Item 4'.toString()}
      </div>
      <div
        key="item5"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Logo />
      </div>
      <div
        key="item6"
        className="grid-item handle"
        style={{
          backgroundColor: '#FD5A3B',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SimpleWeather />
      </div>
    </ReactGridLayout>
  );
};
