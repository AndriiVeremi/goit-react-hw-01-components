import PropTypes from "prop-types";
import css from "./Friends.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friend_list}>
        {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <li className={css.item} key={id}>
              <span
                className={
                  isOnline
                    ? ` ${css.online}`
                    : ` ${css.offline}`
                }
              ></span>
              <img className={css.avatar} src={avatar} alt={name} style={{ width: 48 }} />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
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

