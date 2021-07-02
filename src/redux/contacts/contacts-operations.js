import axios from "axios";

import {
  contactSaveRequest,
  contactSaveSuccess,
  contactSaveError,
  contactRemoveRequest,
  contactRemoveSuccess,
  contactRemoveError,
  filterUpdate,
} from "../../redux/contacts/contacts-actions";
axios.defaults.baseURL = "http://localhost:69";

const contactSave = (text) => (dispatch) => {
  const contact = { text };
  dispatch(contactSaveRequest());
  axios
    .post("./contacts", contact)
    .then(({ data }) => dispatch(contactSaveSuccess(data)))
    .catch((error) => dispatch(contactSaveError(error)));
};

const contactRemove = (contactId) => (dispatch) => {
  dispatch(contactRemoveRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactRemoveSuccess(contactId)))
    .catch((error) => dispatch(contactRemoveError(error)));
};

export default {
  contactSave,
  contactRemove,
};
