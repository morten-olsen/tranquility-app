import React from 'react';
import Row, { Icon } from 'components/base/Row';
import useForm from 'hooks/useForm';

interface Props {
  name: string;
  label: string;
}

const Checkbox: React.FC<Props> = ({ name, label }) => {
  const { value, setValue } = useForm(name);
  return (
    <Row
      title={label}
      right={(
        <Icon
          name={value ? "checkmark-circle-outline" : "ellipse-outline"}
          onPress={() => setValue(!value)}
        />
      )}
    />
  );
};

export default Checkbox;
