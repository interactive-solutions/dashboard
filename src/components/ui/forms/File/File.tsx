import {
  ChangeEvent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useMemo,
  useState
} from 'react';

import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';

import { FormError } from 'components/ui/forms';
import { FileSelectors } from 'consts/cypress';

import * as styles from './File.styles';

export interface FileProps {
  register: UseFormRegister<any>;
  name: string;
  children: ReactNode;
  accept?: string;
  capture?: boolean | 'user' | 'environment';
  multiple?: boolean;
  validation?: RegisterOptions;
  disabled?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  fileRef?: MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  showFileList?: boolean;
  fullWidth?: boolean;
}

export const File = ({
  register,
  name,
  children,
  accept,
  capture,
  multiple,
  validation,
  disabled,
  error,
  fileRef,
  onChange,
  onBlur,
  showFileList,
  fullWidth
}: FileProps) => {
  const [fileList, setFileList] = useState<string[]>([]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { files }
      } = event || {};

      onChange?.(event);
      if (files) setFileList(Array.from(files).map((file) => file.name));
    },
    [onChange]
  );

  const getValidation = useMemo(
    () => (!disabled ? validation : {}),
    [disabled, validation]
  );

  const registerHolder = useMemo(
    () => register(name, getValidation),
    [name, register, getValidation]
  );

  return (
    <styles.Root
      $fullWidth={fullWidth}
      $isDisabled={disabled}
      data-cy={FileSelectors.Root}
    >
      <styles.Label>
        <styles.Input
          type="file"
          accept={accept}
          capture={capture}
          multiple={multiple}
          disabled={disabled}
          data-cy={FileSelectors.Input}
          {...registerHolder}
          ref={(event) => {
            if (fileRef) fileRef.current = event;
            registerHolder.ref(event);
          }}
          onChange={(event) => {
            registerHolder.onChange(event);
            handleOnChange(event);
          }}
          onBlur={(event) => {
            registerHolder.onBlur(event);
            onBlur?.(event);
          }}
        />
        <styles.Children>{children}</styles.Children>
      </styles.Label>
      {!!showFileList && (
        <styles.FileList>
          {fileList.map((file, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <styles.FileListItem key={index}>{file}</styles.FileListItem>
          ))}
        </styles.FileList>
      )}
      <FormError error={error} />
    </styles.Root>
  );
};
