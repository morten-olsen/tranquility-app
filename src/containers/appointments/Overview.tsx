import React, { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import useRepos from '../../hooks/useRepos';
import useAsync from 'hooks/useAsync';
import Row, { Icon } from 'components/base/Row';
import { Title } from 'typography';

interface Props {
  day: number;
}

const Today: React.FC<Props> = ({ day }) => {
  const repos = useRepos();
  const navigation = useNavigation();
  const { result, rerun } = useAsync(() => repos.appointmentRepo.getAll(), [day, repos.appointmentRepo]);

  useFocusEffect(useCallback(() => {
    rerun();
  }, [rerun]));

  if (!result) {
    return <></>;
  }

  return (
    <>
      <Row
        left={<Icon name="calendar-sharp" />}
        right={(
          <Icon
            name="add-circle-outline"
            onPress={() => navigation.navigate('AppointmentEdit')}
          />
        )}
      ><Title>Appointments</Title></Row>
      {result.map((task) => (
        <Row
          key={task.id}
          left={<Icon name="chevron-forward" />}
          title={task.name}
          onPress={() => navigation.navigate('AppointmentEdit', { id: task.id })}
        />
      ))}
    </>
  );
};

export default Today;
