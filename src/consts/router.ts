/**
 * When creating a path with params you should use a function as below:
 *
 * ExampleParams: (id?: number) => (id ? `/example/${id}` : `/example/[id]`)
 * - Paths.ExampleParams() --> '/example/[id]'
 * - Paths.ExampleParams(123) --> '/example/123'
 */

export const Paths = Object.freeze({
  Landing: '/',
  Login: '/login',
});
