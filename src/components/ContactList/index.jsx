import { Contact } from 'components/Contact/index';
import List from '@mui/material/List';
import { useGetContactsQuery } from 'Redux/contactsApi';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filterQuery = useSelector(state => state.filter);
  const { data } = useGetContactsQuery();

  const normalizeFilter = filterQuery.toLowerCase();
  const filteredContacts =
    data?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    ) ?? [];

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => {
        return <Contact key={id} id={id} name={name} number={phone} />;
      })}
    </List>
  );
};
