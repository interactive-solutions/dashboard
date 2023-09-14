import { useEffect, useRef, useState } from 'react';

import { WidthProvider, Responsive } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import { GridItem } from 'types/grid';

import { WidgetHolder } from './Dashboard.styles';

const ReactGridLayout = WidthProvider(Responsive);

export type DashboardProps = {
  gridItems: GridItem[];
};

export const Dashboard = ({ gridItems }: DashboardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (ref?.current?.getBoundingClientRect()) {
      setOffsetTop(ref.current.getBoundingClientRect().y);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        width: '100vw',
        height: `calc(100vh - ${offsetTop}px - 10px)`,
        maxHeight: `calc(100vh - ${offsetTop}px - 10px)`,
      }}
    >
      <ReactGridLayout
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        draggableHandle=".handle"
        compactType={null}
        isBounded={true}
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
        }}
      >
        {gridItems
          .filter(({ visible }) => visible)
          .map(({ Widget, dataGrid }, index) => (
            <WidgetHolder
              key={`item${index}`}
              className="grid-item handle"
              data-grid={{ ...dataGrid, x: 0, y: 0 }}
            >
              <Widget />
            </WidgetHolder>
          ))}
      </ReactGridLayout>
    </div>
  );
};
