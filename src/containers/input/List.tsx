import React, { useCallback, ReactNode } from 'react';
import useForm from 'hooks/useForm';
import { FormObjectProvider } from 'contexts/FormObject';

type Add = (item: any) => void;

interface Props {
  name: string;
  children: (item: any) => ReactNode;
  header?: (add: Add) => ReactNode;
  footer?: (add: Add) => ReactNode;
};

const InputList: React.FC<Props> = ({
  name,
  children,
  header,
  footer,
}) => {
  const { value, setValue } = useForm(name);
  const list = (value || []) as any[];
  const add = useCallback((item: any) => {
    setValue([
      ...value,
      item,
    ]);
  }, [value]);

  return (
    <>
      {!!header && header(add)}
      {list.map((item: any, index) => (
        <FormObjectProvider key={index} path={[name, index]}>
          {children(item)}
        </FormObjectProvider>
      ))}
      {!!footer && footer(add)}
    </>
  );
};

export default InputList;
