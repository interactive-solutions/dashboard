export interface RouterErrorProps {
  statusCode: number;
}

export const RouterError = ({ statusCode }: RouterErrorProps) => {
  return <div>{`Error with status code "${statusCode}"`}</div>;
};
