import Modal from 'components/base/Modal';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import { formatDay, getDayFromTime } from 'utils/day';

interface Props {
  selected?: number;
  visible: boolean;
  onClose: () => any;
  onSelect: (day: number) => any;
}

const DateSelector: React.FC<Props> = ({
  selected,
  visible,
  onClose,
  onSelect,
}) => {
  return (
    <Modal
      onClose={onClose}
      visible={visible}
    >
      <Calendar
        onDayPress={(day) => {
          onSelect(getDayFromTime(day.timestamp));
          onClose();
        }}
      />
    </Modal>

  );
};

export default DateSelector;
