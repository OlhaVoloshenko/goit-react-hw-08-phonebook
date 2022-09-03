import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <ListItem>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar sx={{ width: 30, height: 30 }}>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <IconButton
          type="button"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          Delete
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
