import React from 'react';
import styled from 'styled-components/native';
import useForm from 'hooks/useForm';

interface Props {
  name: string;
  defaultValue?: any;
}

const Input = styled.Slider`
`;

const InputText: React.FC<Props> = ({
  name,
  defaultValue,
}) => {
  const { value, setValue } = useForm(name);

  return (
    <Input
      value={value || defaultValue }
      onValueChange={evt => setValue(evt)}
    />
  );
};

export default InputText;
