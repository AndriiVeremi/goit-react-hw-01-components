import PropTypes from "prop-types";
// import css from "./Friends.module.css";
import {
  FriendLis,
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendText,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    
      <FriendLis>
        {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <FriendItem key={id}>
              <FriendStatus isOn={isOnline}></FriendStatus>
              <FriendImg src={avatar} alt={name} style={{ width: 48 }} />
              <FriendText>{name}</FriendText>
            </FriendItem>
          );
        })}
      </FriendLis>
    
  
    //   <ul className={css.friend_list}>
    //     {friends.map(({ avatar, name, id, isOnline }) => {
    //       return (
    //         <li className={css.item} key={id}>
    //           <span
    //             className={
    //               isOnline
    //                 ? ` ${css.online}`
    //                 : ` ${css.offline}`
    //             }
    //           ></span>
    //           <img className={css.avatar} src={avatar} alt={name} style={{ width: 48 }} />
    //           <p className={css.name}>{name}</p>
    //         </li>
    //       );
    //     })}
    //   </ul>
  
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

