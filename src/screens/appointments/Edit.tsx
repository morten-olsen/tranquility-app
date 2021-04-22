import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Cell } from 'components/base/Row';
import useRepos from 'hooks/useRepos';
import Edit from 'containers/entity/Edit';
import TextInput from 'containers/input/Text';
import DateSelector from 'containers/input/DateSelector';
import Checkbox from 'containers/input/Checkbox';
import Time from 'containers/input/Time';
import AppointmentModel from 'data/models/Appointment';

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
      {(value: AppointmentModel) => (
        <>
          <TextInput label="Name" name="name" />
          <TextInput label="Description" name="description" numberOfLines={4} />
          <Checkbox label="All day" name="allDay" />
          <DateSelector
            name="startDate"
            label="Start date"
            right={!value.allDay && <Cell><Time name="startTime" label="Start time" /></Cell>}
          />
          <DateSelector
            name="endDate"
            label="End date"
            right={!value.allDay && <Cell><Time name="endTime" label="End time" /></Cell>}
          />
        </>
      )}
    </Edit>
  );
}

export default EditAppointmentScreen;
