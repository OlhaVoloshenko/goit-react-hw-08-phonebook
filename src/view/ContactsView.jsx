import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';

import { ContactForm } from 'components/InputForm/index';
import { ContactList } from 'components/ContactList/index';
import { Filter } from 'components/Filter/index';

import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ModalWindow } from 'components/ModalWindow/index';

const ContactsView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAdd = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Filter />
        <IconButton
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add contact"
        >
          <PersonAddIcon />
        </IconButton>
      </Toolbar>

      <ContactList />
      <ModalWindow open={isOpen} handleClose={() => setIsOpen(false)}>
        <ContactForm />
      </ModalWindow>
    </>
  );
};

export default ContactsView;
