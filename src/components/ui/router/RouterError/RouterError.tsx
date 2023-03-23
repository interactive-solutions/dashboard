import { Typography } from '@mui/material';

export type RouterErrorProps = {
  statusCode: number;
};

export const RouterError = ({ statusCode }: RouterErrorProps) => {
  return (
    <Typography color="error.main">{`Router error with status code "${statusCode}".`}</Typography>
  );
};
