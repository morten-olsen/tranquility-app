import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Row, { Icon } from 'components/base/Row';

interface Props {
  title?: string;
  visible: boolean;
  children?: ReactNode;
  onClose?: () => any;
}

const ModalWrapper = styled.Modal`
  background: transparent;
`;

const Wrapper = styled.View`
  margin-top: 220px;
  margin-bottom: -20px;
  padding-bottom: 20px;
  background: #fff;
  shadow-offset: 0px;
  shadow-opacity: 1;
  shadow-color: rgba(0,0,0,0.3);
  shadow-radius: 215px;
  border-radius: 20px;
  flex: 1;
`; 

const Modal: React.FC<Props> = ({
  children,
  visible,
  title,
  onClose,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <ModalWrapper transparent visible={visible} animationType="slide">
      <Wrapper>
        <Row
          title={title}
          right={<Icon name="close" onPress={onClose} />}
        />
        {children}
      </Wrapper>
    </ModalWrapper>
  );
};

export default Modal;
