import React, { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import useRepos from '../../hooks/useRepos';
import useAsync from 'hooks/useAsync';
import { FormProvider } from 'contexts/Form';
import MemberSelector from 'containers/input/MemberSelector';
import Day from 'data/models/Day';
import Row, { Icon } from 'components/base/Row';
import List from 'containers/input/List';
import {Title} from 'typography';

interface Props {
  day: string;
}

const Today: React.FC<Props> = ({ day }) => {
  const navigation = useNavigation();
  const repos = useRepos();
  const { result, rerun } = useAsync(() => repos.dayRepo.get(day), [day, repos]);

  const save = useCallback(async (dayModel: Day) => {
    await repos.dayRepo.set({
      ...dayModel,
      id: day,
    });
    rerun();
  }, [repos.dayRepo, day, rerun]);

  const removeDish = useCallback(async (id: string) => {
    if (!result) return;
    const clone = {
      ...result,
      mealPlan: result.mealPlan?.filter(m => m.id !== id) || [],
    }
    await save(clone);
  }, [result]);

  useFocusEffect(useCallback(() => {
    rerun();
  }, [rerun]));

  if (!result) {
    return <></>;
  }

  return (
    <FormProvider
      initialValue={result}
      onSave={save}
      autoSave
    >
      <MemberSelector
        label="Dropoff"
        left={<Icon name="arrow-forward-circle-outline" />}
        title="How is dropping of?"
        name="dropoffKid"
      />
      <MemberSelector
        label="Pickup"
        left={<Icon name="arrow-back-circle-outline" />}
        title="How is picking up?"
        name="pickupKid"
      />
      <Row
        right={(
          <Icon
            name="add-circle-outline"
            onPress={() => navigation.navigate('AddDishToDay', { day })}
          />
        )}
      >
        <Title>Meal plan</Title>
      </Row>
      <List name="mealPlan">
        {(dish) => (
          <Row
            key={dish.id}
            title={dish.name}
            left={<Icon name="fast-food-outline" />}
            right={(
              <Icon
                name="close-circle-outline"
                color="red"
                onPress={() => removeDish(dish.id)}
              />
            )}
          />
        )}
      </List>
    </FormProvider>
  );
};

export default Today;
