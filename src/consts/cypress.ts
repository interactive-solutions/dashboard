/**
 * When selecting elements for Cypress you should use data-cy="". When defining
 * and selecting elements you should use this constants file. Try to follow this
 * naming convention:
 *
 * export enum <ComponentName>Selectors {
 *   Heading = '<component-name>-heading',
 *   Paragraph = '<component-name>-paragraph'
 * }
 *
 * So let's say you have a Button component where you want to select the root
 * and the spinner, that would result in:
 *
 * export enum ButtonSelectors {
 *   Root = 'button-root',
 *   Spinner = 'button-spinner'
 * }
 */

export enum FormErrorSelectors {
  Root = 'form-error-root'
}

export enum ImageSelectors {
  Root = 'image-root',
  Image = 'image-image'
}

export enum TableSelectors {
  Root = 'table-root',
  Table = 'table-table',
  Head = 'table-head',
  Body = 'table-body',
  Empty = 'table-empty',
  Loading = 'table-loading',
  Pagination = 'table-pagination',
  Above = 'table-above',
  Search = 'table-search'
}
