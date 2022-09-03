import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { filterContacts } from 'redux/filterAction';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contacts by name</h3>
      <SearchIcon />
      <Input
        placeholder="Filter contacts"
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

Filter.propTypes = {
  Filter: PropTypes.string,
};
