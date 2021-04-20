import React, { ReactNode, useCallback } from 'react';
import styled from 'styled-components/native';
import { FormProvider } from 'contexts/Form';
import { useNavigation } from '@react-navigation/native';
import Repo from 'data/repos/BaseRepo';
import useAsync from 'hooks/useAsync';
import Modal from 'components/base/Modal';
import Save from 'containers/input/Save';
import Delete from 'containers/input/Delete';

interface Props {
  children: ReactNode;
  repo: Repo<any>;
  id?: string;
  closeRoute?: string;
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
          {children}
        </ScrollView>
        <ButtonWell>
          <Delete />
          <Save />
        </ButtonWell>
      </FormProvider>
    </Modal>
  );
};

export default Edit;

