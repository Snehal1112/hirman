import {LIST, SORT} from '../actions/action';

const initState = {
	items: [],
	sort:{field:undefined,dire:'ASC'}
};

export default (state = initState, {type,payload}) => {
	switch (type) {
		case LIST:
			return {
				...state,
				items: payload
			};
		case SORT:
			return {
				...state,
				items: [...payload.items],
				sort:{...payload.sort}
			};
		default:
			return state;
	}
};
