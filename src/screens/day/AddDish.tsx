import React, { useCallback } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import useRepos from 'hooks/useRepos';
import DishSelector from 'containers/input/DishSelector';
import Modal from 'components/base/Modal';
import { FormProvider } from 'contexts/Form';
import Save from 'containers/input/Save';

type Props = RouteProp<{
  EditTaskScreen: {
    day: string;
  };
}, 'EditTaskScreen'>;

const AddDishToDayScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<Props>()
  const { dayRepo } = useRepos();

  const save = useCallback(async ({ dish }: any) => {
    const dayId = route.params?.day || '';
    const day = await dayRepo.get(dayId);
    await dayRepo.set({
      ...day,
      id: dayId,
      mealPlan: [
        ...(day.mealPlan || []),
        dish,
      ],
    });
  }, [navigation, dayRepo, route.params?.day]);

  return (
    <Modal
      visible
      onClose={() => navigation.navigate('Root')}
    >
      <FormProvider
        initialValue={{ dish: undefined }}
        onSave={async (value) => {
          await save(value);
          navigation.navigate('Root');
        }}
      >
        <DishSelector label="Dish" name="dish" />
        <Save />
      </FormProvider>
    </Modal>
  );
}

export default AddDishToDayScreen;
