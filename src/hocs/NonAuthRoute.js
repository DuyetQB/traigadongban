/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../components/common/LoadingSpinner';
import { getMe, updateIsFirstAccess } from 'store/authSlide';
import webStorage from 'utils/webStorage';

function NonAuthRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const isFirstAccess = useSelector((state) => state.authReducer.isFirstAccess);
  const { isAuth, isSignUpSuccess } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isFirstAccess) {
      const accessToken = webStorage.getToken();
      if (accessToken) {
        dispatch(getMe());
      } else {
        dispatch(updateIsFirstAccess());
      }
    }
  }, [dispatch, isFirstAccess]);

  // waiting for check when user is first access by url (for example: direct access, F5)
  if (isFirstAccess) return <LoadingSpinner />;
  // redirect to top page, prevent access to non auth route (for example: /login) when user is authenticated
  if (isAuth && !isSignUpSuccess) return <Redirect to="/" />;

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
}

export default NonAuthRoute;
