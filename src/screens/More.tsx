import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Row from 'components/base/Row';

const MoreScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Row
        title="Members"
        onPress={() => navigation.navigate('MemberListScreen')}
      />
      <Row
        title="Dishes"
        onPress={() => navigation.navigate('DishListScreen')}
      />
    </>
  );
};

export default MoreScreen;
