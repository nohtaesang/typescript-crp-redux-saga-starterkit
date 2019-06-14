import { combineReducers } from 'redux';
import userReducer from './user';
import { UserStateType } from '../models/user';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;

export type State = {
	userReducer: UserStateType;
};
