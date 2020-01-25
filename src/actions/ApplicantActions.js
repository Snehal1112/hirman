import {LIST, SORT} from './action';

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
			status: 'Applied'
		},
		{
			id: 2,
			name: 'mehul vasava',
			email: 'mvasava@gmail.com',
			age: 23,
			experience: 2,
			position: 'manager',
			applied: new Date().getTime(),
			status: 'Applied'
		},
		{
			id: 3,
			name: 'mayank dabhiu',
			email: 'mdabhi@gmail.com',
			age: 20,
			experience: 6,
			position: 'QA engineer',
			applied: new Date("2020/1/20").getTime(),
			status: 'Applied'
		}
	];

	if (sorting) {
		data = sortByFiled(data,sorting)
	}

	dispatch({
		type: LIST,
		payload: data
	});
};

const sortBy = (data, sort)=>dispatch=>{
	dispatch({
		type: SORT,
		payload: {
			items: sortByFiled(data,sort),
			sort
		}
	});
};

const sortByFiled = (data, sort)=>{
	const { filed, dire = 'ASC' } = sort;
	return [...data].sort((one, two) => {
		let valueOne = one[filed];
		let valueTwo = two[filed];

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
export { getListOfCandidate,sortBy };
