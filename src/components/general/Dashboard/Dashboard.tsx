import { WidthProvider, Responsive } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import { GridItem } from 'types/grid';

import * as styles from './Dashboard.styles';

const ReactGridLayout = WidthProvider(Responsive);

export type DashboardProps = {
  gridItems: GridItem[];
};

export const Dashboard = ({ gridItems }: DashboardProps) => {
  return (
    <ReactGridLayout
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={50}
      draggableHandle=".handle"
      compactType={null}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {gridItems
        .filter(({ defaultVisible }) => defaultVisible)
        .map(({ Widget, dataGrid }, index) => (
          <styles.WidgetHolder
            key={`item${index}`}
            className="grid-item handle"
            data-grid={{ ...dataGrid, x: 0, y: 0 }}
          >
            <Widget />
          </styles.WidgetHolder>
        ))}
    </ReactGridLayout>
  );
};
