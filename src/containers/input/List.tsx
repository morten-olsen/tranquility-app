import React, { useCallback, ReactNode } from 'react';
import useForm from 'hooks/useForm';
import { FormObjectProvider } from 'contexts/FormObject';

type Add = () => void;

interface Props {
  name: string;
  children: (item: any) => ReactNode;
  header?: (add: Add) => ReactNode;
  footer?: (add: Add) => ReactNode;
};

const InputList: React.FC<Props> = ({
  name,
  children,
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
      {list.map((item: any, index) => (
        <FormObjectProvider key={index} path={[name, index]}>
          {children(item)}
        </FormObjectProvider>
      ))}
    </>
  );
};

export default InputList;
