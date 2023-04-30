import styled from '@emotion/styled';

export const FriendLis = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 70px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 15px;
`;

export const FriendStatus = styled.span`
  background-color: ${props => {
    return props.isOn ? 'green' : 'red';
  }};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const FriendImg = styled.img`
  margin-right: 20px;
`;

export const FriendText = styled.p`
  font-size: 20px;
`;
