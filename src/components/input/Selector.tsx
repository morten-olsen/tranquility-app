import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Modal from 'components/base/Modal';
import Row, { Props as RowProps } from 'components/base/Row';

interface Props<T> {
  visible: boolean;
  title?: string;
  onClose: () => void;
  renderItem: (item: T) => RowProps;
  getKey: (item: T) => string | number;
  items: T[];
  onSelect?: (item: T) => any;
}

const List = styled.FlatList``;

const Selector: React.FC<Props<any>> = ({
  visible,
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

  return (
    <Modal
      title={title}
      visible={visible}
      onClose={onClose}
    >
      <List
        data={items}
        renderItem={({ item }) => (
          <Row
            {...renderItem(item)}
            onPress={() => select(item)}
            key={getKey(item)}
          />
        )}
      />
    </Modal>
  );
};

export default Selector;
