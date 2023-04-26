import { PureComponent } from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';

import { LoremIpsum } from '../../../widgets/LoremIpsum';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
// eslint-disable-next-line @typescript-eslint/no-use-before-define
const originalLayouts = getFromLS('layouts') || {};

export default class GridLayout extends PureComponent {
  constructor(props: {}) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };
  }

  static get defaultProps() {
    return {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30,
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout: any, layouts: any) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    saveToLS('layouts', layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line react/button-has-type,@calm/react-intl/missing-formatted-message */}
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout: any, layouts: any) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div
            key="1"
            style={{ border: '1px solid black' }}
            data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
          >
            <LoremIpsum />
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key: string) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /* Ignore*/
    }
  }
  // @ts-ignore
  return ls[key];
}

function saveToLS(key: string, value: any) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
