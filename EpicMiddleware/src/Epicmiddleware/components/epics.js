//epics.js 
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_USERS } from '../actions/actionTypes.js';
import { fetchUsersSuccess, fetchUsersError } from '../actions/actions.js';

const API_URL = process.env.REACT_APP_RANDOM_USER_API;

export const fetchUsersEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_USERS),
    mergeMap(() =>
      ajax.getJSON(`${API_URL}/?results=50`).pipe(
        map(response => fetchUsersSuccess(response.results)),
        catchError(error => of(fetchUsersError(error.message)))
      )
    )
  );
