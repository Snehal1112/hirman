import { LIST } from './action';

const getListOfCandidate = (sorting) => (dispatch) => {
	let data = [
		{
			id: 1,
			name: 'snehal dangroshiya',
			email: 'snehaldangroshiya@gmail.com',
			age: 30,
			experiance: 7,
			position: 'software engineer',
			applied: new Date().getTime(),
			status: 'Applied'
		},
		{
			id: 2,
			name: 'mehul vasava',
			email: 'mvasava@gmail.com',
			age: 23,
			experiance: 2,
			position: 'software engineer',
			applied: new Date().getTime(),
			status: 'Applied'
		},
		{
			id: 3,
			name: 'mayank dabhiu',
			email: 'mdabhi@gmail.com',
			age: 20,
			experiance: 6,
			position: 'QA engineer',
			applied: new Date().getTime(),
			status: 'Applied'
		}
	];
	if (sorting) {
		const { filed, dire = 'ASC' } = sorting;
		data = data.sort((one, two) => (dire === 'ASC' ? one[filed] - two[filed] : two[filed] - one[filed]));
	}

	dispatch({
		type: LIST,
		payload: data
	});
};

export { getListOfCandidate };
