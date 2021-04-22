import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components/native';
import Modal from 'components/base/Modal';
import Row, { Icon, Props as RowProps } from 'components/base/Row';

interface Props<T> {
  visible: boolean;
  title?: string;
  selected?: string;
  onClose: () => void;
  renderItem: (item: T) => RowProps;
  getKey: (item: T) => string | number;
  items: T[];
  onSelect?: (item: T) => any;
}

const List = styled.FlatList``;

const Selector: React.FC<Props<any>> = ({
  visible,
  selected,
  onClose,
  title,
  renderItem,
  getKey,
  items,
  onSelect,
}) => {

  const select = useCallback((item: any) => {
    onClose();
    if (onSelect) {
      onSelect(item);
    }
  }, [onSelect, onClose]);

  const selectedId = useMemo(() => selected ? getKey(selected) : undefined, [selected]);
  return (
    <Modal
      title={title}
      visible={visible}
      onClose={onClose}
    >
      <List
        data={items}
        renderItem={({ item }) => {
          const id = getKey(item);
          return (
            <Row
              {...renderItem(item)}
              onPress={() => select(item)}
              left={(
                <Icon 
                  name={selectedId === id ? "checkmark-circle" : "ellipse-outline"} 
                />
              )}
              key={id}
            />
          );
        }}
      />
    </Modal>
  );
};

export default Selector;
