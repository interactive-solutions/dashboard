import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';

import { RouterError } from 'components/router';

export default ({ statusCode }: ErrorProps) => {
  return <RouterError statusCode={statusCode || 404} />;
};

export const getInitialProps = async (contextData: NextPageContext) => {
  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData);
};
