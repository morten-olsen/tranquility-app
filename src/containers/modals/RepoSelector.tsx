import React, { useCallback, useMemo } from 'react';
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
  search?: string;
  onSearch?: (input: string) => any;
  create?: (input: string) => any;
  filter?: (input: string, items: any[]) => any;
}

const RepoSelector: React.FC<Props> = ({
  repoName,
  title,
  renderItem,
  selected,
  onSelect,
  visible,
  onClose,
  search,
  onSearch,
  create: doCreate,
  filter,
}) => {
  const repos = useRepos();
  const repo = repos[repoName];
  const { result: items = [], rerun } = useAsync(async () => {
    const members = await repo.getAll();
    return members;
  }, [repo]);
  useFocusEffect(rerun);
  const filtered = useMemo(() => {
    if (!filter || !search) {
      return items;
    }
    return filter(search, items);
  }, [items, filter, search]);
  const create = useCallback(async (name: string) => {
    if (!doCreate) {
      return;
    }
    const item = doCreate(name);
    await repo.set({
      ...item,
      isNew: true,
    });
    rerun();
  }, [repo]);
  const select = useCallback((item: any) => {
    if (search && onSearch) {
      onSearch('');
    }
    onSelect(item);
  }, [onSelect, search, onSearch]);
  return (
    <Selector
      title={title}
      visible={visible}
      onClose={onClose}
      selected={selected}
      items={filtered}
      onSelect={select}
      renderItem={renderItem}
      getKey={(item) => item.id}
      search={search}
      onSearch={onSearch}
      onCreate={create}
    />
  );
};

export {
  Props,
};

export default RepoSelector;
