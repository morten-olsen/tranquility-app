import React, {ReactNode} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Selector from 'components/input/SelectorField';
import Repos from 'data/repos/Repos';
import { Props as RowProps } from 'components/base/Row';
import useRepos from 'hooks/useRepos';
import useAsync from 'hooks/useAsync';
import useForm from 'hooks/useForm';

interface Props {
  name: string;
  repoName: keyof Repos;
  label?: string;
  title?: string;
  left?: ReactNode;
  renderItem: (item: any) => RowProps;
}

const RepoSelector: React.FC<Props> = ({
  name,
  repoName,
  label,
  left,
  title,
  renderItem,
}) => {
  const repos = useRepos();
  const repo = repos[repoName];
  const { value, setValue } = useForm(name);
  const { result: items = [], rerun } = useAsync(async () => {
    const members = await repo.getAll();
    return members;
  }, [repo]);
  useFocusEffect(rerun);
  return (
    <Selector
      title={title}
      selected={value}
      label={label}
      left={left}
      items={items}
      onClear={() => setValue(null)}
      onSelect={setValue}
      renderItem={renderItem}
      getKey={(item) => item.id}
    />
  );
};

export {
  Props,
};

export default RepoSelector;
