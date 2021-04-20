import { useContext, useCallback } from 'react';
import FormObjectContext from 'contexts/FormObject';

const useForm = <T extends {[name: string]: any} = any>(field: keyof T) => {
  const context = useContext(FormObjectContext);
  const value = context.value[field];
  const setValue = useCallback((value: any) => {
    context.setField(field as string, value);
  }, [context.setField]);
  return {
    value,
    setValue,
  };
}

export default useForm;
