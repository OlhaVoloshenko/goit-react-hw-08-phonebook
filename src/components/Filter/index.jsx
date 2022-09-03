import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { filterContacts } from '../../Redux/filterAction';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <SearchIcon />
      <Input
        placeholder="Filter contacts"
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        inputProps={{ 'aria-label': 'search' }}
      />
    </>
  );
};

Filter.propTypes = {
  Filter: PropTypes.string,
};
