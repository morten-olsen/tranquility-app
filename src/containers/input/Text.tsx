import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import useForm from 'hooks/useForm';
import Row from 'components/base/Row';

interface Props {
  label: string;
  name: string;
  defaultValue?: any;
  left?: ReactNode;
  numberOfLines?: number;
}

const Input = styled.TextInput`
  border-color: #eee;
  border-bottom-width: 1px;
  padding: 10px 0px;
`;

const InputText: React.FC<Props> = ({
  name,
  label,
  defaultValue,
  left,
  numberOfLines,
}) => {
  const { value, setValue } = useForm(name);

  return (
    <Row
      subTitle={label}
      left={left}
    >
      <Input
        numberOfLines={numberOfLines}
        multiline={(numberOfLines || 0) > 0}
        value={value || defaultValue }
        onChangeText={setValue}
      />
    </Row>
  );
};

export default InputText;
