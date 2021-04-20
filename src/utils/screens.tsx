import React, { useMemo, ReactNode } from 'react';
import useRepos from 'hooks/useRepos';
import Repo from 'data/repos/Repos';
import Edit from 'containers/entity/Edit';

export interface CreateEditScreenOptions {
  repo: keyof Repo;
  view: ReactNode;
};

export const createEditScreen = ({
  repo,
  view,
}: CreateEditScreenOptions) => {
  const EditScreen: React.FC = () => {
    const repos = useRepos();
    const current = repos[repo];
    return (
      <Edit repo={current}>
        {view}
      </Edit>
    );
  };
};

export interface CreateListScreenOptions<T> {
  getItems: (repos: Repo) => Promise<T>
}
type CreateListScreen = <T>(options: CreateListScreenOptions<T>) => void;
export const createListScreen: CreateListScreen = ({
}) => {
};
