import React, { createContext, ReactNode, useState, useCallback, useEffect } from 'react';

interface FormDataContextValue<T extends {[name: string]: any} = any> {
  value: Partial<T>;
  set: (value: any) => void;
  save: () => any;
  remove: () => any;
}

interface FormDataProviderProps {
  initialValue?: any;
  children?: ReactNode;
  onSave?: (data: any) => any;
  onRemove?: (data: any) => any;
  autoSave?: boolean;
}

const FormDataContext = createContext<FormDataContextValue>(undefined as any);

const FormDataProvider: React.FC<FormDataProviderProps> = ({
  children,
  initialValue,
  onSave,
  onRemove,
  autoSave = false,
}) => {
  const [value, setValue] = useState<any>(initialValue || {});

  const save = useCallback(() => {
    if (onSave) {
      onSave(value);
    }
  }, [onSave, value]);

  const remove = useCallback(() => {
    if (onRemove) {
      onRemove(value);
    }
  }, [onRemove, value]);

  const set = useCallback((value: any) => {
    setValue(value);
    if (autoSave && onSave) {
      onSave(value);
    }
  }, [onSave, autoSave]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <FormDataContext.Provider
      value={{
        value,
        set,
        save,
        remove,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export {
  FormDataProviderProps,
  FormDataProvider,
};

export default FormDataContext;
