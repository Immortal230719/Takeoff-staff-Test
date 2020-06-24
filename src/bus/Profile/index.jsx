import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  ListItemText,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemSecondaryAction,
  Tooltip,
} from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

// tools
import {
  CreateContactForm, CustomBackdrop, BackBtn, SearchContactForm,
} from 'components';
import { book } from 'routes/book';
import {
  profileAsyncContacts,
  profileAsyncDelete,
  profileAsyncCreate,
  profileDeleteErrorReset,
  profileCreateErrorReset,
  profileAsyncSearch,
  profileSetInitialValues,
  profileAsyncChange,
} from './actions';
import { getProfile, isLogged } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  linkBtn: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    padding: '50px 0',
  },
  listItem: {
    color: '#fcfcfc',
  },
}));

export const Profile = ({ history }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showChangeForm, setShowChangeForm] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoggedIn = useSelector(isLogged)
  const {
    contacts, isFetching, error, errorMessage, initialValuesInChangeForm,
  } = useSelector(getProfile)

  useEffect(() => {
    if (!isLoggedIn) {
      history.push(book.root);
    }
    dispatch(profileAsyncContacts())
  }, [dispatch, isLoggedIn, history]);

  // submit handlers
  const submitCreateHandler = (values) => {
    setShowCreateForm(false)
    dispatch(profileAsyncCreate(values))
    dispatch(reset('createContact'));
  };
  const subminSearchHandler = (values) => {
    dispatch(profileAsyncSearch(values))
    dispatch(reset('searchContact'));
  }
  const submitChangeHandler = (values) => {
    dispatch(profileAsyncChange(initialValuesInChangeForm.id, values))
    dispatch(reset('createContact'));
    setShowChangeForm(!showChangeForm);
  }
  const deleteHandler = (e) => {
    const currentID = e.currentTarget.getAttribute('data-id')
    dispatch(profileAsyncDelete(currentID))
  }
  // set components to be visible
  const setShowChangeHandler = (e) => {
    const idOfChangedContact = e.currentTarget.getAttribute('data-id');
    dispatch(profileSetInitialValues(idOfChangedContact));
    setShowChangeForm(true);
  }
  const setShowCreateHandler = () => {
    setShowCreateForm(!showCreateForm)
  }

  // reset error
  const resetErrorHandler = () => {
    dispatch(profileDeleteErrorReset())
    dispatch(profileCreateErrorReset())
  }

  return (
    <Container className={classes.wrapper}>
      <>
        { isFetching && (<CustomBackdrop show={isFetching} />) }
      </>
      { error
        ? (
          <Typography align="center" variant="h3" component="h1" gutterBottom>
            {errorMessage}
            <Link onClick={resetErrorHandler} className={classes.linkBtn} to="/">
              <BackBtn>Back</BackBtn>
            </Link>
          </Typography>
        )
        : (
          <>
            <Typography
              color="primary"
              align="center"
              variant="h3"
              component="h1"
              gutterBottom
            >
              Contacts
            </Typography>
            <Typography
              color="primary"
              align="left"
              variant="h5"
              component="h3"
              gutterBottom
            >
              Search
            </Typography>
            <SearchContactForm onSubmit={subminSearchHandler} />
            <List className={classes.root}>
              {Array.isArray(contacts)
              && contacts.map(({ id, name, email }) => (
                <ListItem
                  className={classes.listItem}
                  key={id}
                  role={undefined}
                  button
                  alignItems="flex-start"
                >
                  <ListItemText id={id} primary={name} />
                  <ListItemText id={id} primary={email} />
                  <ListItemSecondaryAction edge="end">
                    <IconButton
                      data-id={id}
                      aria-label="change"
                      onClick={setShowChangeHandler}
                    >
                      <Tooltip title="Change">
                        <CreateRoundedIcon />
                      </Tooltip>
                    </IconButton>
                    <IconButton
                      data-id={id}
                      onClick={deleteHandler}
                      aria-label="delete"
                    >
                      <Tooltip title="Delete">
                        <DeleteForeverRoundedIcon />
                      </Tooltip>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
              <ListItem
                className={classes.listItem}
                key="last"
                role={undefined}
                button
                alignItems="flex-start"
              >
                <ListItemText id="last" primary="OPTIONS" />
                <ListItemSecondaryAction edge="end">
                  <IconButton onClick={setShowCreateHandler} aria-label="comments">
                    <Tooltip title="Create new contact">
                      <BorderColorRoundedIcon />
                    </Tooltip>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            {showCreateForm
            && (
            <>
              <Typography
                color="primary"
                align="center"
                variant="h4"
                component="h3"
                gutterBottom
              >
                Create contact
              </Typography>
              <CreateContactForm onSubmit={submitCreateHandler} />
            </>
            )}
            {showChangeForm
            && (
            <>
              <Typography
                color="primary"
                align="center"
                variant="h4"
                component="h3"
                gutterBottom
              >
                Change contact
              </Typography>
              <CreateContactForm
                onSubmit={submitChangeHandler}
                enableReinitialize
                initialValues={{
                  name: initialValuesInChangeForm.name,
                  email: initialValuesInChangeForm.email,
                }}
              />
            </>
            )}
          </>

        )}
    </Container>
  )
}

Profile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
}
