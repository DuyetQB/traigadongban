import React, { useEffect, Suspense } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from 'components/common/LoadingSpinner';
import PlaceHolderSpinner from 'components/common/PlaceHolderSpinner';

import { getMe, updateIsFirstAccess } from 'store/authSlide';
import webStorage from 'utils/webStorage';

function AuthRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isFirstAccess = useSelector((state) => state.authReducer.isFirstAccess);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

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

  useEffect(() => {
    // redirect to login page when user is not authenticated
    if (!isAuth && !isFirstAccess) history.push('/');
  }, [isAuth, isFirstAccess]);

  // waiting for check when user is first access by url (for example: direct access, F5)
  if (isFirstAccess) return <LoadingSpinner />;
  // redirect to login page when user is not authenticated

  return (
    <Route {...rest}>
      <Suspense fallback={<PlaceHolderSpinner />}>
        <Component />
      </Suspense>
    </Route>
  );
}

export default AuthRoute;
