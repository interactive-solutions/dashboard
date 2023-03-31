import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { messages } from 'i18n/messages';

export type IntlProviderProps = {
  locale?: ReactIntlProvider['props']['locale'];
} & Omit<ReactIntlProvider['props'], 'locale'>;

export const IntlProvider = (props: IntlProviderProps) => {
  return (
    <ReactIntlProvider
      {...props}
      messages={messages.sv}
      locale="sv"
      defaultLocale="sv"
    />
  );
};
