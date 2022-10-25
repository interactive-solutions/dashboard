import { FlattenSimpleInterpolation } from 'styled-components';

export const getFlattenSimpleInterpolationValue = (
  flattenSimpleInterpolation: FlattenSimpleInterpolation,
  property: string
) => {
  let getValue = '';

  if (!Array.isArray(flattenSimpleInterpolation)) {
    return getValue;
  }

  if (!flattenSimpleInterpolation[0].includes(';')) {
    return getValue;
  }

  const findItem = flattenSimpleInterpolation[0]
    .split(';')
    .find((item: string) => item.includes(property));
  const [, value] = findItem.split(':');
  getValue = value;

  return getValue;
};
