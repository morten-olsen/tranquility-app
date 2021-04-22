import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Selector from 'components/input/Selector';
import Repos from 'data/repos/Repos';
import { Props as RowProps } from 'components/base/Row';
import useRepos from 'hooks/useRepos';
import useAsync from 'hooks/useAsync';

interface Props {
  repoName: keyof Repos;
  title?: string;
  selected?: any;
  renderItem: (item: any) => RowProps;
  visible: boolean;
  onSelect: (item: any) => any
  onClose: () => any;
}

const RepoSelector: React.FC<Props> = ({
  repoName,
  title,
  renderItem,
  selected,
  onSelect,
  visible,
  onClose,
}) => {
  const repos = useRepos();
  const repo = repos[repoName];
  const { result: items = [], rerun } = useAsync(async () => {
    const members = await repo.getAll();
    return members;
  }, [repo]);
  useFocusEffect(rerun);
  return (
    <Selector
      title={title}
      visible={visible}
      onClose={onClose}
      selected={selected}
      items={items}
      onSelect={onSelect}
      renderItem={renderItem}
      getKey={(item) => item.id}
    />
  );
};

export {
  Props,
};

export default RepoSelector;
