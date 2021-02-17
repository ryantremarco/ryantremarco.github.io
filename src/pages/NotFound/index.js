import React from 'react';
import ErrorPage from '../../components/ErrorPage';

const NotFound = () => (
  <ErrorPage title="404">
    Looks like this place doesn't exist.<br/>
    Probably calls for an existential crisis, wouldn't you say?
  </ErrorPage>
)

export default NotFound;