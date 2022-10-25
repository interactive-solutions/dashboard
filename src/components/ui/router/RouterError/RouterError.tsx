import * as styles from './RouterError.styles';

export interface RouterErrorProps {
  statusCode: number;
}

export const RouterError = ({ statusCode }: RouterErrorProps) => {
  return <styles.Root>{`Error with status code "${statusCode}"`}</styles.Root>;
};
