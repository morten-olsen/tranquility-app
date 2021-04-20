import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Today from 'containers/day/Overview';
import DateSelector from 'components/date/Selector';
import TaskOverview from 'containers/tasks/Overview';
import { getDayFromTime } from 'utils/day';

type Props = RouteProp<{
  TodayScreen: {
    day?: string;
  }
}, 'TodayScreen'>;

const Scroll = styled.ScrollView`
`;

const TodayScreen: React.FC = () => {
  const { params = {}} = useRoute<Props>();
  const current = params?.day
    ? params.day
    : new Date().getTime().toString();
  const [day, setDay] = useState(getDayFromTime(parseInt(current)));
  return (
    <>
      <DateSelector selected={day} onSelect={setDay} />
      <Scroll>
        <Today day={day.toString()} />
        <TaskOverview day={day} />
      </Scroll>
    </>
  );
}

export default TodayScreen;
