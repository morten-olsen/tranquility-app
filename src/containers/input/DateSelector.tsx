import React, { ReactNode, useState } from 'react';
import useForm from 'hooks/useForm';
import Row from 'components/base/Row';
import DateSelector from 'components/input/DateSelector';
import { dateName } from 'utils/day';

interface Props {
  label: string;
  name: string;
  left?: ReactNode;
  right?: ReactNode;
}

const InputText: React.FC<Props> = ({
  name,
  label,
  left,
  right,
}) => {
  const { value, setValue } = useForm(name);
  const [visible, setVisible] = useState(false);

  return (
    <Row
      subTitle={label}
      title={value ? dateName(value) : 'Select'}
      left={left}
      right={right}
      onPress={() => setVisible(true)}
    >
      <DateSelector
        selected={value}
        visible={visible}
        onClose={() => setVisible(false)}
        onSelect={setValue}
      />
    </Row>
  );
};

export default InputText;
