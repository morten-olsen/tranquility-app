import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import useRepos from 'hooks/useRepos';
import Edit from 'containers/entity/Edit';
import TextInput from 'containers/input/Text';
import DateSelector from 'containers/input/DateSelector';

type Props = RouteProp<{
  EditTaskScreen: {
    id: string;
  };
}, 'EditTaskScreen'>;

const EditAppointmentScreen: React.FC = () => {
  const route = useRoute<Props>();
  const { appointmentRepo } = useRepos();

  return (
    <Edit repo={appointmentRepo} id={route.params?.id}>
      <TextInput label="Name" name="name" />
      <DateSelector name="startDate" label="Start date" />
      <DateSelector name="endDate" label="End date" />
    </Edit>
  );
}

export default EditAppointmentScreen;
