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

export enum ButtonSelectors {
  Root = 'button-root',
  Spinner = 'button-spinner'
}

export enum LinkSelectors {
  Root = 'link-root'
}

export enum FormErrorSelectors {
  Root = 'form-error-root'
}

export enum ImageSelectors {
  Root = 'image-root',
  Image = 'image-image'
}

export enum TextFieldSelectors {
  Root = 'text-field-root',
  Label = 'text-field-label',
  Field = 'text-field-field'
}

export enum SelectSelectors {
  Root = 'select-root',
  Label = 'select-label'
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

export enum CheckboxSelectors {
  Root = 'checkbox-root',
  Input = 'checkbox-input'
}
