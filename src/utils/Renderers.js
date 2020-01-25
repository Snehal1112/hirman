export const Renderers = {
	dateRenderer: (value, record, column) => {
		return new Date(value).format(column.format ? column.format : 'd-m-Y');
	}
};
