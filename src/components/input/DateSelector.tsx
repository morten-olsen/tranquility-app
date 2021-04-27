import Modal from 'components/base/Modal';
import React from 'react';
import { CalendarList as Calendar } from 'react-native-calendars';

interface Props {
  selected?: string;
  visible: boolean;
  onClose: () => any;
  onSelect: (day: string) => any;
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
        current={selected}
        enableSwipeMonths={true}
        showWeekNumbers={true}
        markedDates={selected ? {
          [selected]: {selected: true, selectedColor: 'blue'},
        }: undefined}
        onDayPress={(day) => {
          onSelect(day.dateString);
          onClose();
        }}
      />
    </Modal>

  );
};

export default DateSelector;
