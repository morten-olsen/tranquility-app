import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import useRepos from '../../hooks/useRepos';
import useAsync from 'hooks/useAsync';
import { FormProvider } from 'contexts/Form';
import MemberSelector from 'containers/input/MemberSelector';
import InputText from 'containers/input/Text';
import Day from 'data/models/Day';
import Row, { Icon } from 'components/base/Row';
import RepoSelectorModal from 'containers/modals/RepoSelector';
import List from 'containers/input/List';
import {Title} from 'typography';

interface Props {
  day: string;
}

const Today: React.FC<Props> = ({ day }) => {
  const repos = useRepos();
  const [dishSearch, setDishSearch] = useState('');
  const { result, rerun } = useAsync(() => repos.dayRepo.get(day), [day, repos]);
  const [dishSelectorVisible, setDishSelectorVisible] = useState(false);

  const save = useCallback(async (dayModel: Day) => {
    await repos.dayRepo.set({
      ...dayModel,
      id: day,
    });
    rerun();
  }, [repos.dayRepo, day, rerun]);

  const dishFilter = useCallback((input: string, items: any[]) => {
    return items.filter(i => i.name.toLowerCase().includes(input.toLowerCase()));
  }, []);

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
      <InputText
        label="Notes"
        name="notes"
        numberOfLines={3}
        left={<Icon name="book-outline" />}
      />
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
      <List
        name="mealPlan"
        header={(add) => (
          <Row
            left={<Icon name="fast-food-outline" />}
            right={(
              <Icon
                name="add-circle-outline"
                onPress={() => setDishSelectorVisible(true)}
              />
            )}
          >
        <Title>Meal plan</Title>
        <RepoSelectorModal
          repoName="dishRepo"
          title="Select dish"
          renderItem={(item: any) => ({
            title: item.name,
          })}
          visible={dishSelectorVisible}
          onSelect={(item) => {
            add(item);
          }}
          filter={dishFilter}
          onClose={() => setDishSelectorVisible(false)}
          search={dishSearch}
          onSearch={setDishSearch}
          create={(name) => ({ name: name.trim(), includesKid: false })}
        />
      </Row>
        )}
      >
        {(dish) => (
          <Row
            key={dish.id}
            title={dish.name}
            left={<Icon name="chevron-forward" />}
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
