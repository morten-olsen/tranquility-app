import React from 'react';
import TextInput from 'containers/input/Text';
import Save from 'containers/input/Save';
import MemberSelector from 'containers/input/MemberSelector';

const TaskEdit: React.FC = () => {
  return (
    <>
      <TextInput name="name" />
      <MemberSelector name="responsible" />
      <Save />
    </>
  );
};

export default TaskEdit;
