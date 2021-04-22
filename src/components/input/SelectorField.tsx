import React, { useState, ReactNode, useCallback } from 'react';
import Selector from 'components/input/Selector';
import Row, { Props as RowProps, Icon } from 'components/base/Row';

interface Props<T> {
  selected?: T;
  title?: string;
  left?: ReactNode;
  label?: string;
  renderItem: (item: T) => RowProps;
  getKey: (item: T) => string | number;
  items: T[];
  onSelect?: (item: T) => any;
  onClear?: () => any;
}

const SelectorField: React.FC<Props<any>> = ({
  selected,
  label,
  title,
  left,
  renderItem,
  getKey,
  items,
  onSelect,
  onClear,
}) => {
  const [visible, setVisible] = useState(false);

  const select = useCallback((item: any) => {
    setVisible(false);
    if (onSelect) {
      onSelect(item);
    }
  }, [onSelect, setVisible]);

  const close = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const clear = (
    <Icon name="close-circle-outline" color="red" onPress={onClear} />
  );

  return (
    <>
      { !!selected ? (
        <Row
          subTitle={label}
          left={left}
          {...renderItem(selected)}
          right={clear}
          onPress={() => setVisible(true)}
        />
      ) : (
        <Row
          subTitle={label}
          title="Not selected"
          left={left}
          onPress={() => setVisible(true)}
        />
      )}
      <Selector
        visible={visible}
        title={title}
        onClose={close}
        renderItem={renderItem}
        selected={selected}
        getKey={getKey}
        items={items}
        onSelect={select}
      />
    </>
  );
};

export default SelectorField;
