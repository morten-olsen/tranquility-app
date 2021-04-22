import React from 'react';
import useForm from 'hooks/useForm';
import DateTimePicker from '@react-native-community/datetimepicker'

interface Props {
  name: string;
  label: string;
}

const Checkbox: React.FC<Props> = ({ name, label }) => {
  const { value, setValue } = useForm(name);
  return (
    <DateTimePicker
      value={value ? new Date(value) : new Date()}
      is24Hour
      mode="time"
      style={{ width: 60 }}
      onChange={(evt, value) => {
        setValue(value?.getTime());
      }}
    />
  );
};

export default Checkbox;
