import React from 'react';
import Row from 'components/base/Row';
import Member from 'data/models/Member';

interface Props {
  onPress?: (member: Member) => any;
  member: Member;
  label?: string;
}

const MemberItem: React.FC<Props> = ({ member, onPress, label }) => (
  <Row
    onPress={() => !!onPress && onPress(member)}
    title={member.name}
    subTitle={label}
  />
);

export {
  Props,
};

export default MemberItem;
