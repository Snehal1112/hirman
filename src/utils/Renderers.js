export const Renderers = {
	dateRendere: (value, record, column) => {
		return new Date(value).format(column.formate ? column.formate : 'd-m-Y');
	}
};
