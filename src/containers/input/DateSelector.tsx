import React, { ReactNode, useState } from 'react';
import styled from 'styled-components/native';
import useForm from 'hooks/useForm';
import Row from 'components/base/Row';
import DateSelector from 'components/input/DateSelector';
import { dateName } from 'utils/day';

interface Props {
  label: string;
  name: string;
  left?: ReactNode;
}

const Input = styled.TextInput`
  border-color: #eee;
  border-bottom-width: 1px;
  padding: 10px 0px;
`;

const InputText: React.FC<Props> = ({
  name,
  label,
  left,
}) => {
  const { value, setValue } = useForm(name);
  const [visible, setVisible] = useState(false);

  return (
    <Row
      subTitle={label}
      title={value ? dateName(value) : 'Select'}
      left={left}
      onPress={() => setVisible(true)}
    >
      <DateSelector
        visible={visible}
        onClose={() => setVisible(false)}
        onSelect={setValue}
      />
    </Row>
  );
};

export default InputText;
