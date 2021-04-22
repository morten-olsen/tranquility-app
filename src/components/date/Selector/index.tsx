import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'typography';
import useServices from 'hooks/useServices';
import Row, { Icon } from 'components/base/Row';
import DateSelectorModal from 'components/input/DateSelector';

interface Props {
  selected: string;
  onSelect: (day: string) => any;
}

const DateSelector: React.FC<Props> = ({
  selected,
  onSelect,
}) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const { timeService } = useServices();

  return (
    <>
      <Row
        onPress={() => setVisible(true)}
        right={<Icon name="calendar-sharp" />}
        left={<Icon name="menu" onPress={navigation.toggleDrawer} />}
      >
        <Title>{selected}</Title>
      </Row>
      <DateSelectorModal
        selected={selected}
        onSelect={onSelect}
        onClose={() => setVisible(false)}
        visible={visible}
      />
    </>
  );
};

export default DateSelector;
