import React, {ReactNode} from 'react';
import Selector from './RepoSelector';

interface Props {
  name: string;
  label?: string;
  title?: string;
  left?: ReactNode;
}

const MemberSelector: React.FC<Props> = ({
  name,
  label,
  left,
  title,
}) => {
  return (
    <Selector
      name={name}
      title={title}
      repoName="memberRepo"
      label={label}
      left={left}
      renderItem={(member) => ({
        title: member.name,
      })}
    />
  );
};

export {
  Props,
};

export default MemberSelector;
