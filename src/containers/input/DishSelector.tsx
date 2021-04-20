import React, {ReactNode} from 'react';
import Selector from './RepoSelector';

interface Props {
  name: string;
  label?: string;
  title?: string;
  left?: ReactNode;
}

const DishSelector: React.FC<Props> = ({
  name,
  label,
  left,
  title,
}) => {
  return (
    <Selector
      name={name}
      title={title}
      repoName="dishRepo"
      label={label}
      left={left}
      renderItem={(dish) => ({
        title: dish.name,
      })}
    />
  );
};

export {
  Props,
};

export default DishSelector;
