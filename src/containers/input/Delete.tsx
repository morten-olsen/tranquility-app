import React, { useContext } from 'react';
import styled from 'styled-components/native';
import FormContext from 'contexts/Form';

const Wrapper = styled.Button``; 

const Delete: React.FC<{}> = () => {
  const { remove } = useContext(FormContext);

  return (
    <Wrapper title="Delete" onPress={remove} />
  );
}

export default Delete;
