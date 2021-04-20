import React, { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import useRepos from '../../hooks/useRepos';
import useAsync from 'hooks/useAsync';
import TaskModel from 'data/models/Task';
import Row, { Icon }from 'components/base/Row';
import { Title } from 'typography';

interface Props {
  day: number;
}

const Today: React.FC<Props> = ({ day }) => {
  const repos = useRepos();
  const navigation = useNavigation();
  const { result, rerun } = useAsync(() => repos.taskRepo.getAll(), [day, repos.dayRepo]);

  const toggleTaskCompleted = useCallback(async (task: TaskModel) => {
    await repos.taskRepo.set({
      ...task,
      completed: !task.completed,
    });
    rerun();
  }, [rerun, day, repos]);

  useFocusEffect(useCallback(() => {
    rerun();
  }, [rerun]));


  if (!result) {
    return <></>;
  }

  return (
    <>
      <Row
        right={(
          <Icon
            name="add-circle-outline"
            onPress={() => navigation.navigate('TaskEdit')}
          />
        )}
      ><Title>Tasks</Title></Row>
      {result.map((task) => (
        <Row
          key={task.id}
          left={(
            <Icon
              name={task.completed ? 'checkmark-circle-outline' : 'ellipse-outline'}
              onPress={() => toggleTaskCompleted(task)}
            />
          )}
          title={task.name}
          subTitle={task.responsible?.name}
          onPress={() => navigation.navigate('TaskEdit', { id: task.id })}
        />
      ))}
    </>
  );
};

export default Today;
