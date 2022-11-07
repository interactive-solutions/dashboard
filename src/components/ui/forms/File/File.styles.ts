import styled from 'styled-components';

import { FileProps } from './File';

export const Root = styled.div<{
  $fullWidth?: FileProps['fullWidth'];
  $isDisabled?: FileProps['disabled'];
}>`
  display: inline-flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.ease(['opacity'])};

  ${({ $fullWidth }) =>
    !!$fullWidth &&
    `
      display: flex;
    `}

  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      opacity: 0.5;

      &, * {
        cursor: not-allowed;
      }

      ${Children} {
        pointer-events: none;
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

export const Children = styled.span`
  display: flex;
`;

export const FileList = styled.ul`
  padding-top: ${({ theme }) => theme.spacing(1)};
`;

export const FileListItem = styled.li`
  text-align: left;
`;
