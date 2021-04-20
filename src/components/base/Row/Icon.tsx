import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Cell from './Cell';

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  background?: string;
  color?: string;
}

const Touch = styled.TouchableOpacity``;

const Icon: React.FC<Props> = ({ name, onPress, background, color }) => {
  const view = (
    <Cell style={{ backgroundColor: background, borderRadius: 32 }}>
      <Ionicons
        style={{ width: 32, height: 32, padding: 2 }}
        name={name}
        size={28}
        color={color}
      />
    </Cell>
  );

  if (onPress) {
    return <Touch onPress={onPress}>{view}</Touch>;
  }
  return view;
};

export default Icon;
