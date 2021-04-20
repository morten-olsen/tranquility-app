import React from 'react';
import { FormObjectProvider } from './FormObject';
import FormDataContext, { FormDataProvider, FormDataProviderProps } from './FormData';

const FormProvider: React.FC<FormDataProviderProps> = ({ children, ...props }) => (
  <FormDataProvider {...props}>
    <FormObjectProvider path={[]}>
      {children}
    </FormObjectProvider>
  </FormDataProvider>
);

export {
  FormProvider,
};

export default FormDataContext;
