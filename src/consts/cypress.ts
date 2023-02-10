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
