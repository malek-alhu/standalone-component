import { createReducer, createSelector, on } from '@ngrx/store';
import { addUser, getUser } from './user.actions';

export interface UserState {
  users: User[];
}

export interface User {
  userId: number;
  name: string;
}

const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(getUser, (state, { users }) => [...users]),
  on(addUser, (state, { user }) => [...state, user])
);

export const userSelector = createSelector(
  (state: UserState) => state.users,
  (users) => users
);
