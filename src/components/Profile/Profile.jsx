import PropTypes from 'prop-types';
import CSS from './Profile.module.css';



export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) =>{
    return (
<div className={CSS.profile}>
  <div className={CSS.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={CSS.avatar}
    />
    <p className={CSS.name}>{username}</p>
    <p className={CSS.tag}>{tag}</p>
    <p className={CSS.location}>{location}</p>
  </div>

  <ul className={CSS.stats}>
    <li>
      <span className={CSS.label}>Followers</span>
      <span className={CSS.quantity}>{followers}</span>
    </li>
    <li>
      <span className={CSS.label}>Views</span>
      <span className={CSS.quantity}>{views}</span>
    </li>
    <li>
      <span className={CSS.label}>Likes</span>
      <span className={CSS.quantity}>{likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

