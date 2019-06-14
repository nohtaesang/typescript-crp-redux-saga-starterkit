import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'ts/redux/reducers/index';
// actions
import { userActionConstant } from 'ts/redux/actions/user';
// import { subjectActionConstant } from '@actions/subject';
// import { questionActionConstant } from '@actions/question';
// components

type OwnProps = {};

const Temp: FunctionComponent<OwnProps> = (props) => {
	// store
	const { userReducer } = useSelector((state: State) => state);
	// action
	const dispatch = useDispatch();

	return (
		<div className="header">
			<div>header</div>
		</div>
	);
};

export default Temp;
