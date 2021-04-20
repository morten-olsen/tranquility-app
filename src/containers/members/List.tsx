import React from 'react';
import styled from 'styled-components/native';
import useAsync from 'hooks/useAsync';
import useRepos from 'hooks/useRepos';
import Row from 'components/base/Row';

const List = styled.FlatList``;

const MemberList: React.FC<{}> = () => {
  const { memberRepo } = useRepos();
  const { result: members } = useAsync(memberRepo.getAll, memberRepo);

  if (!result) {
    return null;
  }

  return (
    <>
      <List
        data={members}
        renderItem={({ item }) => (
          <Row
            key={item.id}
            title={item.name}
          />
        )}
      />
    </>
  );
};

export default MemberList;
