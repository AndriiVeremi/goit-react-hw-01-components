import PropTypes from "prop-types";
// import css from './Profile.module.css';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tags,
  Locations,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tags>@{tag}</Tags>
        <Locations>{location}</Locations>
      </Description>
      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Container>

  //  <div className={css.profile}>
  //     <div className={css.description}>
  //       <img src={avatar} alt="User avatar" className={css.avatar} />
  //       <p className={css.username}>{username}</p>
  //       <p className={css.tag}>@{tag}</p>
  //       <p className={css.location}>{location}</p>
  //     </div>

  //     <ul className={css.stats}>
  //       <li className={css.block}>
  //         <span cl assName={css.label}>Followers</span>
  //         <span className={css.quantity}>{stats.followers}</span>
  //       </li>
  //       <li className={css.block}>
  //         <span className={css.label}>Views</span>
  //         <span className={css.quantity}>{stats.views}</span>
  //       </li>
  //       <li className={css.block}>
  //         <span className={css.label}>Likes</span>
  //         <span className={css.quantity}>{stats.likes}</span>
  //       </li>
  //     </ul>
  //   </div>
    
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};