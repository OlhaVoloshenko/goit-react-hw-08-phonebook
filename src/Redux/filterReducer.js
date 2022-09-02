import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filterAction';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
