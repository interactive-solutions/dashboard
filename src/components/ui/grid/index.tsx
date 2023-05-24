import React from 'react';

import { WidthProvider, Responsive } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import { gridItems } from 'widgets';

const ReactGridLayout = WidthProvider(Responsive);

export const GridLayout = () => {
  const widgetHolderStyle = {
    backgroundColor: 'rgba(200, 200, 200, 0.1)',
    backdropFilter: 'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.05)',
  };

  return (
    <ReactGridLayout
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={50}
      draggableHandle=".handle"
      compactType={null}
      style={{
        backgroundImage:
          'linear-gradient(235deg, rgba(213,231,255,1) 0%, rgba(222,255,227,1) 100%)',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {gridItems.map(({ Widget, dataGrid }, index) => (
        <div
          key={`item${index}`}
          className="grid-item handle"
          style={widgetHolderStyle}
          data-grid={dataGrid}
        >
          <Widget />
        </div>
      ))}
    </ReactGridLayout>
  );
};
