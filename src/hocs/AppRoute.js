import React, { useEffect, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from 'components/common/LoadingSpinner';
import PlaceHolderSpinner from 'components/common/PlaceHolderSpinner';

import { getMe, updateIsFirstAccess } from 'store/authSlide';
import webStorage from 'utils/webStorage';

function AppRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const isFirstAccess = useSelector((state) => state.authReducer.isFirstAccess);

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

  return (
    <Route {...rest}>
      <Suspense fallback={<PlaceHolderSpinner />}>
        <Component />
      </Suspense>
    </Route>
  );
}

export default AppRoute;
