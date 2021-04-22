import React, { ReactNode, useCallback, useContext } from 'react';
import styled from 'styled-components/native';
import { FormProvider } from 'contexts/Form';
import { useNavigation } from '@react-navigation/native';
import Repo from 'data/repos/BaseRepo';
import useAsync from 'hooks/useAsync';
import FormDataContext from 'contexts/FormData';
import Modal from 'components/base/Modal';
import Save from 'containers/input/Save';
import Delete from 'containers/input/Delete';

type ChildFN = (value: any) => ReactNode;
interface Props {
  children: ChildFN | ReactNode;
  repo: Repo<any>;
  id?: string;
  closeRoute?: string;
}

interface ChildProps {
  fn: ChildFN;
}

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const ButtonWell = styled.View`
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  background: #efefef;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ChildComponent: React.FC<ChildProps> = ({ fn }) => {
  const { value } = useContext(FormDataContext);
  return fn(value);
}

const Edit: React.FC<Props> = ({
  children,
  repo,
  id,
  closeRoute,
}) => {
  const navigation = useNavigation();
  const { result } = useAsync(async () => {
    const item = await repo.get(id || '');
    return item;
  }, [repo, id]);

  const save = useCallback(async (item: any) => {
    await repo.set(item);
    navigation.navigate('Root');
  }, [repo, id]);

  const remove = useCallback(async (item: any) => {
    await repo.remove(item.id);
    navigation.navigate('Root');
  }, [repo, id]);

  if (!result) {
    return null;
  }

  return (
    <Modal
      title="Edit"
      visible
      onClose={() => navigation.navigate(closeRoute || 'Root')}
    >
      <FormProvider
        initialValue={result}
        onSave={save}
        onRemove={remove}
      >
        <ScrollView>
          {children instanceof Function ? <ChildComponent fn={children} /> : children }
        </ScrollView>
        <ButtonWell>
          {!result.isNew && <Delete />}
          <Save />
        </ButtonWell>
      </FormProvider>
    </Modal>
  );
};

export default Edit;

