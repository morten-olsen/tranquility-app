import React, { useContext, createContext, useCallback, ReactNode, useMemo } from 'react';
import FormContext from './FormData';

interface FormObjectContextValue {
  value: any;
  path: (string | number)[];
  setField: (field: string, value: any) => any;
}

interface FormObjectProviderProps {
  path: (string | number)[];
  children: ReactNode;
}

const FormObjectContext = createContext<FormObjectContextValue>({
  path: [],
  value: undefined,
  setField: () => {},
});

const FormObjectProvider: React.FC<FormObjectProviderProps> = ({
  children,
  path,
}) => {
  const form = useContext(FormContext);
  const parent = useContext(FormObjectContext);
  const currentPath = useMemo(
    () => [...parent.path, ...path],
    [parent.path, path],
  ); 
  const value = useMemo(() => {
    const currentValue = form.value;
    return currentPath.reduce((output, key) => output[key], currentValue);
  }, [form.value, currentPath]);

  const setField = useCallback((field: string, fieldValue: any) => {
    value[field] = fieldValue;
    form.set({ ...form.value });
  }, [currentPath]);

  return (
    <FormObjectContext.Provider
      value={{
        value,
        path: currentPath,
        setField,
      }}
    >
      {children}
    </FormObjectContext.Provider>
  );
};

export { FormObjectProvider };

export default FormObjectContext;
