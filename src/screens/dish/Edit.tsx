import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import useRepos from 'hooks/useRepos';
import Edit from 'containers/entity/Edit';
import TextInput from 'containers/input/Text';

type Props = RouteProp<{
  EditTaskScreen: {
    id: string;
  };
}, 'EditTaskScreen'>;

const EditDishScreen: React.FC = () => {
  const route = useRoute<Props>();
  const { dishRepo } = useRepos();

  return (
    <Edit repo={dishRepo} id={route.params?.id}>
      <TextInput label="Name" name="name" />
    </Edit>
  );
}

export default EditDishScreen;
