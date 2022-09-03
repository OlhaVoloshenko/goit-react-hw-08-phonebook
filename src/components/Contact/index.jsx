import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'Redux/contactsApi';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ name, number, id }) => {
  const [deleteContactId, { isLoading }] = useDeleteContactMutation();
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
          onClick={() => deleteContactId(id)}
        >
          Delete
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  id: PropTypes.string.isRequired,
};
