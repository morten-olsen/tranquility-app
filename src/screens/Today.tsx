import React, { useState } from 'react';
import styled from 'styled-components/native';
import Today from 'containers/day/Overview';
import DateSelector from 'components/date/Selector';
import TaskOverview from 'containers/tasks/Overview';
import AppointmentsOverview from 'containers/appointments/Overview';
import { getDayFromTime } from 'utils/day';

const Scroll = styled.ScrollView`
`;

const Inner = styled.View`
  padding-top: 50px;
`;

const TodayScreen: React.FC = () => {
  const [day, setDay] = useState(getDayFromTime(new Date().getTime()));
  return (
    <>
      <Scroll>
        <Inner>
          <DateSelector selected={day} onSelect={setDay} />
          <Today day={day.toString()} />
          <AppointmentsOverview day={day} />
          <TaskOverview day={day} />
        </Inner>
      </Scroll>
    </>
  );
}

export default TodayScreen;
