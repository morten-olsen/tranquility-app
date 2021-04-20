import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Body2, Caption, Body1 } from 'typography';
import Cell from './Cell';
import Icon from './Icon';

interface Props {
  left?: ReactNode;
  right?: ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  children?: ReactNode;
}

const Touch = styled.TouchableOpacity``;

const Wrapper = styled(Cell)`
  flex-direction: row;
`;

const Main = styled(Cell)`
  align-items: stretch;
  flex: 1;
`;

const Row: React.FC<Props> = ({
  left,
  right,
  title,
  subTitle,
  description,
  children,
  onPress,
  onLongPress,
}) => {
  const rowItem = (
    <Wrapper>
      {left}
      <Main>
        {subTitle && <Caption>{subTitle}</Caption>}
        {title && <Body2>{title}</Body2>}
        {description && <Body1>{description}</Body1>}
        {children}
      </Main>
      {right}
    </Wrapper>
  );

  if (onPress || onLongPress) {
    return (
      <Touch onPress={onPress} onLongPress={onLongPress}>
        {rowItem}
      </Touch>
    );
  }

  return rowItem;
};

export { Props, Icon, Cell };

export default Row;
