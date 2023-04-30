import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendText,
} from './FriendListItem.styled';

export const FriendListItems = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name} style={{ width: 48 }} />
      <FriendText>{name}</FriendText>
    </FriendItem>
  );
};



FriendListItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
