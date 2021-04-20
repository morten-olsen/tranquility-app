import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';
import Row, { Props as RowProps } from 'components/base/Row';
import useAsync from 'hooks/useAsync';

interface Props {
  getItems: (search?: string) => Promise<any>;
  renderItem: (item: any) => RowProps;
  onPress: (item: any) => void;
  getKey: (item: any) => string | number;
  addItem: () => any;
}

const FlatList = styled.FlatList``;

const List: React.FC<Props> = ({
  getItems,
  renderItem,
  onPress,
  getKey,
  addItem,
}) => {
  const [search, setSearch] = useState('');
  const { result, rerun } = useAsync(async () => {
    const items = await getItems(search || undefined);
    return items;
  }, [search, getItems]);
  useFocusEffect(useCallback(() => {
    rerun();
  }, [rerun]));

  if (!result) {
    return null;
  }

  return (
    <FlatList
      ListHeaderComponent={(
        <Row
          title="Add"
          onPress={addItem}
        />
      )}
      data={result}
      renderItem={(info) => (
        <Row
          key={getKey(info.item)}
          {...renderItem(info.item as any)}
          onPress={() => onPress(info.item)}
        />
      )}
    />
  );
};

export default List;
