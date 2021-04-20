import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import useRepos from 'hooks/useRepos';
import Edit from 'containers/entity/Edit';
import TextInput from 'containers/input/Text';
import MemberSelector from 'containers/input/MemberSelector';

type Props = RouteProp<{
  EditTaskScreen: {
    id: string;
  };
}, 'EditTaskScreen'>;

const EditTaskScreen: React.FC = () => {
  const route = useRoute<Props>();
  const { taskRepo } = useRepos();

  return (
    <Edit repo={taskRepo} id={route.params?.id}>
      <TextInput label="Name" name="name" />
      <MemberSelector label="Assigned to" name="responsible" />
    </Edit>
  );
}

export default EditTaskScreen;
