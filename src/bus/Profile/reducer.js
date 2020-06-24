import {
  PROFILE_FETCH_CONTACTS_START,
  PROFILE_FETCH_CONTACTS_STOP,
  PROFILE_FILL_CONTACTS,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_RESET_ERROR,
  PROFILE_SET_DELETING_ERROR,
  PROFILE_DELETE_CONTACT_START,
  PROFILE_DELETE_CONTACT_STOP,
  PROFILE_DELETE_CONTACT_FILL,
  PROFILE_DELETE_ERROR_RESET,
  PROFILE_CREATE_CONTACT_START,
  PROFILE_CREATE_CONTACT_STOP,
  PROFILE_CREATE_CONTACT_FILL,
  PROFILE_CREATE_ERROR_RESET,
  PROFILE_SET_CREATING_ERROR,
  PROFILE_SEARCH_CONTACT_START,
  PROFILE_SEARCH_CONTACT_STOP,
  PROFILE_SEARCH_CONTACT_FILL,
  PROFILE_SET_INITIAL_VALUES,
  PROFILE_CHANGE_CONTACT_START,
  PROFILE_CHANGE_CONTACT_STOP,
  PROFILE_CHANGE_CONTACT_FILL,
} from './types';

const initialState = {
  contacts: [],
  isFetching: false,
  error: false,
  errorMessage: '',
  initialValuesInChangeForm: {
    id: '',
    name: '',
    email: '',
  },
}

export const profileReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case PROFILE_FETCH_CONTACTS_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_FILL_CONTACTS:
      return {
        ...state,
        contacts: [...payload],
        isFetching: false,
        error: false,
      }
    case PROFILE_FETCH_CONTACTS_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_SET_FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case PROFILE_RESET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: '',
      }

    // delete contact
    case PROFILE_DELETE_CONTACT_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_DELETE_CONTACT_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_SET_DELETING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case PROFILE_DELETE_CONTACT_FILL:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
      }
    case PROFILE_DELETE_ERROR_RESET:
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: '',
      }

    // create contact
    case PROFILE_CREATE_CONTACT_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_CREATE_CONTACT_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_SET_CREATING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case PROFILE_CREATE_CONTACT_FILL:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      }
    case PROFILE_CREATE_ERROR_RESET:
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: '',
      }

    // search contact
    case PROFILE_SEARCH_CONTACT_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_SEARCH_CONTACT_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_SEARCH_CONTACT_FILL:
      return {
        ...state,
        contacts: [payload],
      }

    // change contact
    case PROFILE_SET_INITIAL_VALUES: {
      const currentContact = state.contacts.filter((contact) => contact.id === payload)[0]
      return {
        ...state,
        initialValuesInChangeForm: { ...currentContact },
      }
    }
    case PROFILE_CHANGE_CONTACT_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_CHANGE_CONTACT_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_CHANGE_CONTACT_FILL: {
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === payload.id) {
            return payload
          }
          return contact;
        }),
      }
    }

    default:
      return state;
  }
}
