import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name} from './FriendList.module'

export function FriendList ({friends}) {
    return(
            <List>
                {friends.map(({avatar, name, isOnline, id}) => (
                    <Item key={id}>
                        <Status eventType={isOnline}></Status>
                            <Avatar src={avatar} alt={name} width='48' />
                                <Name>{name}</Name>
                    </Item>
                ))}
            </List>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };