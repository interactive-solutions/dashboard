import { PureComponent } from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';

import { LoremIpsum } from '../../../widgets/LoremIpsum';
import { Logo } from "../../../widgets/Logo";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class GridLayout extends PureComponent {
  constructor(props: {}) {
    super(props);
  }

  static get defaultProps() {
    return {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30,
    };
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
        >
          <div key="1" style={{ border: '1px solid black' }}>
            <LoremIpsum />
          </div>

          <div key="2">
            <Logo />
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
