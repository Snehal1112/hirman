import {APPLY_FILTER, LIST, SORT} from '../actions/action';

const initState = {
	items: [],
	sort:{field:undefined,dire:'ASC'},
	filter:false,
	filteredData : []
};

export default (state = initState, {type,payload}) => {
	switch (type) {
		case LIST:
			return {
				...state,
				items: payload,
				filteredData : [],
				filter:false
			};
		case SORT:
			return {
				...state,
				items: [...payload.items],
				sort:{...payload.sort},
				filteredData : [],
				filter:false
			};
		case APPLY_FILTER:
			return {
				...state,
				items: [...payload.items],
				filteredData : [...payload.data],
				sort:{...payload.sort},
				filter:true
			};
		default:
			return state;
	}
};
