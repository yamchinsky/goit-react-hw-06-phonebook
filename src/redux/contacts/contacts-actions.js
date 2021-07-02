import { createAction } from "@reduxjs/toolkit";

export const contactSaveRequest = createAction("contacts/contactSaveRequest");
export const contactSaveSuccess = createAction("contacts/contactSaveSuccess");
export const contactSaveError = createAction("contacts/contactSaveError");

export const contactRemoveRequest = createAction(
  "contacts/contactRemoveRequest"
);
export const contactRemoveSuccess = createAction(
  "contacts/contactRemoveSuccess"
);
export const contactRemoveError = createAction("contacts/contactRemoveError");

export const filterUpdate = createAction("contacts/updateFilter");
