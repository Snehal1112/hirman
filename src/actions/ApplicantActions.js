import {APPLY_FILTER, LIST, SORT} from './action';

const getListOfCandidate = (sorting) => (dispatch) => {
	let data = [
		{
			id: 1,
			name: 'snehal dangroshiya',
			email: 'snehaldangroshiya@gmail.com',
			age: 30,
			experience: 7,
			position: 'software engineer',
			applied: new Date().getTime(),
			status: 'Approved'
		},
		{
			id: 2,
			name: 'mehul vasava',
			email: 'mvasava@gmail.com',
			age: 23,
			experience: 2,
			position: 'manager',
			applied: new Date().getTime(),
			status: 'Rejected'
		},
		{
			id: 3,
			name: 'mayank dabhiu',
			email: 'mdabhi@gmail.com',
			age: 20,
			experience: 6,
			position: 'QA engineer',
			applied: new Date("2020/1/20").getTime(),
			status: 'Waiting'
		},
		{
			id: 4,
			name: 'dhara dangroshiya',
			email: 'dhara@gmail.com',
			age: 25,
			experience: 3,
			position: 'tech lead',
			applied: new Date("2020/1/20").getTime(),
			status: 'Approved'
		}
	];

	if (sorting) {
		data = sortByField(data,sorting)
	}
	dispatch({
		type: LIST,
		payload: data
	});
};

const filterBy = (data, field,value)=>dispatch=>{
	dispatch({
		type: APPLY_FILTER,
		payload: {
			items: data,
			filter:true,
			data:data.filter(item=>item[field].toLowerCase() === value.toLowerCase())
		}
	});
};

const sortBy = (data, sort)=>dispatch=>{
	dispatch({
		type: SORT,
		payload: {
			items: sortByField(data,sort),
			sort
		}
	});
};

const sortByField = (data, sort)=>{
	const { field, dire = 'ASC' } = sort;
	return [...data].sort((one, two) => {
		let valueOne = one[field];
		let valueTwo = two[field];

		if (typeof valueOne === "string") {
			valueOne = valueOne.toUpperCase();
			valueTwo = valueTwo.toUpperCase();
			if (dire === 'ASC') {
				if (valueOne < valueTwo) {
					return -1;
				}
				if (valueOne > valueTwo) {
					return 1;
				}
			} else {
				if (valueOne > valueTwo) {
					return -1;
				}
				if (valueOne < valueTwo) {
					return 1;
				}
			}
			return 0;
		} else {
			return dire === 'ASC' ? valueOne - valueTwo : valueTwo - valueOne;
		}
	});
};
export { getListOfCandidate, filterBy, sortBy };
