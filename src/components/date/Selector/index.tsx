import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { DAY, getDayFromTime } from 'utils/day';
import { Body1 } from 'typography';
import {ScrollView} from 'react-native';

interface Props {
  selected: number;
  size?: number;
  onSelect?: (day: number) => any;
}

const Wrapper = styled.ScrollView`
  flex: auto;
  flex-grow: 0;
`; 

const Touchable = styled.TouchableOpacity<{
  selected: boolean;
}>`
  background: ${({ selected }) => selected ? '#eee' : 'transparent'};
  border-color: ${({ selected }) => selected ? '#000' : '#ccc'};
  border-width: 2px;
  width: 50px;
  height: 50px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

const DateSelector: React.FC<Props> = ({
  selected,
  onSelect,
  size = 50,
}) => {
  const scrollRef = useRef<ScrollView>();
  const days = useMemo(() => {
    const items = new Array(size * 2 + 1).fill(undefined).map((_, i) => {
      const correctedIndex = i - size;
      const dayId = getDayFromTime(selected + (DAY * correctedIndex));
      const date = new Date(dayId);
      return {
        dayId,
        date: date.getDate(),
        day: date.getDay(),
        month: date.getMonth(),
        iso: date.toString(),
      }
    });

    return items;
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: 50 * 70,
        animated: true,
      });
    }
  }, [scrollRef]);

  return (
    <Wrapper ref={scrollRef as any} horizontal>
      {days.map(({ dayId, date, month }) => (
        <Touchable
          selected={dayId === selected}
          key={dayId}
          onPress={() => !!onSelect && onSelect(dayId)}
        >
          <Body1>{date}/{month}</Body1>
        </Touchable>
      ))}
    </Wrapper>
  );
};

export default DateSelector;
