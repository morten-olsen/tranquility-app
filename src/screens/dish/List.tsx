import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useRepo from 'hooks/useRepos';
import List from 'containers/entity/List';
import Member from 'data/models/Member';

const MemberList: React.FC = () => {
  const { dishRepo } = useRepo();
  const navigation = useNavigation();

  return (
    <List
      getItems={() => dishRepo.getAll()}
      getKey={(member: Member) => member.id}
      addItem={() => navigation.navigate('DishEdit')}
      renderItem={(member: Member) => ({
        title: member.name || '[No name]',
      })}
      onPress={(member: Member) => {
        navigation.navigate('DishEdit', {
          id: member.id,
        });
      }}
    />
  );
};

export default MemberList;
