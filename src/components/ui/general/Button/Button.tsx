import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export type ButtonProps = {} & LoadingButtonProps;

export const Button = (props: ButtonProps) => {
  return <LoadingButton {...props} />;
};
