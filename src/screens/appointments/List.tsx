import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useRepo from 'hooks/useRepos';
import List from 'containers/entity/List';
import Member from 'data/models/Member';

const AppointmentList: React.FC = () => {
  const { appointmentRepo } = useRepo();
  const navigation = useNavigation();

  return (
    <List
      getItems={() => appointmentRepo.getAll()}
      getKey={(member: Member) => member.id}
      addItem={() => navigation.navigate('AppointmentEdit')}
      renderItem={(member: Member) => ({
        title: member.name,
      })}
      onPress={(member: Member) => {
        navigation.navigate('AppointmentEdit', {
          id: member.id,
        });
      }}
    />
  );
};

export default AppointmentList;
