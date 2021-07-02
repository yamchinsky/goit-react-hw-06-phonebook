import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  contactSaveRequest,
  contactSaveSuccess,
  contactSaveError,
  contactRemoveRequest,
  contactRemoveSuccess,
  contactRemoveError,
  filterUpdate,
} from "./contacts-actions";
import initialState from "./contactsInitialState";

const items = createReducer(initialState, {
  [contactSaveSuccess]: (state, { payload }) => [...state, payload],
  [contactRemoveSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [filterUpdate]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactSaveRequest]: () => true,
  [contactSaveSuccess]: () => false,
  [contactSaveError]: () => false,
  [contactRemoveRequest]: () => true,
  [contactRemoveSuccess]: () => false,
  [contactRemoveError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
