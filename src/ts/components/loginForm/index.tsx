import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { State } from '@reducers/index';
// actions
// import { userActionConstant } from '@actions/user';
// import { subjectActionConstant } from '@actions/subject';
// import { questionActionConstant } from '@actions/question';
// components

type OwnProps = {};

const LoginForm: FunctionComponent<OwnProps> = (props) => {
	// store
	// const { userReducer, subjectReducer, questionReducer } = useSelector((state: State) => state);
	// action
	const dispatch = useDispatch();

	return <div>hi</div>;
};

export default LoginForm;
