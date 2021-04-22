import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Row, { Icon } from 'components/base/Row';
import { Headline } from 'typography';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface Props {
  title?: string;
  visible: boolean;
  children?: ReactNode;
  onClose?: () => any;
}

const ModalWrapper = styled.Modal`
  background: transparent;
`;

const Wrapper = styled.KeyboardAvoidingView`
  margin-top: 120px;
  background: #fff;
  shadow-offset: 0px;
  shadow-opacity: 1;
  shadow-color: rgba(0,0,0,0.3);
  shadow-radius: 215px;
  border-radius: 20px;
  flex: 1;
`; 

const BottomFix =  styled.View`
  padding-bottom: 20px;
  margin-bottom: -20px;
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
      <BlurView intensity={90} style={[StyleSheet.absoluteFill]}>
        <Wrapper behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <BottomFix>
            <Row
              right={<Icon name="close" onPress={onClose} />}
            >
              <Headline>{title}</Headline>
            </Row>
            {children}
          </BottomFix>
        </Wrapper>
      </BlurView>
    </ModalWrapper>
  );
};

export default Modal;
