import { AppProps } from 'next/app';

import { App } from 'components/tools';

export default (props: AppProps) => {
  return <App {...props} />;
};

// import dynamic from 'next/dynamic';
// const App = dynamic(() => import('components/tools/App/App'), {
//   ssr: false
// });
// export default (props: AppProps) => <App {...props} />;
