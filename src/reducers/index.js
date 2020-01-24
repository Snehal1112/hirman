import { combineReducers } from 'redux';
import ApplicantReducers from './ApplicantReducers';

export default combineReducers({
	candidate: ApplicantReducers
});
