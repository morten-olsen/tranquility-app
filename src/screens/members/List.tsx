import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useRepo from 'hooks/useRepos';
import List from 'containers/entity/List';
import Member from 'data/models/Member';

const MemberList: React.FC = () => {
  const { memberRepo } = useRepo();
  const navigation = useNavigation();

  return (
    <List
      getItems={() => memberRepo.getAll()}
      getKey={(member: Member) => member.id}
      addItem={() => navigation.navigate('MemberEdit')}
      renderItem={(member: Member) => ({
        title: member.name,
      })}
      onPress={(member: Member) => {
        navigation.navigate('MemberEdit', {
          id: member.id,
        });
      }}
    />
  );
};

export default MemberList;
