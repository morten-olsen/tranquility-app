import { useContext } from 'react';
import ReposContext from '../contexts/Repos';

const useRepos = () => {
  const repos = useContext(ReposContext);
  return repos;
};

export default useRepos;
