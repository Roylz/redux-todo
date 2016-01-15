export default function todos (state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text])
		case 'DELETE_TODO':
			return
		default:
			return state;
	}
}