import React, { useContext } from 'react';
import styled from 'styled-components/native';
import FormContext from 'contexts/Form';

const Wrapper = styled.Button``; 

const Save: React.FC<{}> = () => {
  const { save } = useContext(FormContext);

  return (
    <Wrapper title="Save" onPress={save} />
  );
}

export default Save;
