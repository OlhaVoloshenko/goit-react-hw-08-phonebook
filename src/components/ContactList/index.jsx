import { ContactItem } from 'components/Contact/index';
import List from '@mui/material/List';
import { useGetContactsQuery } from 'Redux/contactsApi';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { data } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} number={phone} />;
      })}
    </List>
  );
};
