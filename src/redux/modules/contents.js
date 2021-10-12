


// 액션
const CREATE = 'contents/CREATE';
const UPDATE = 'contents/UPDATE';
const DELETE = 'contents/DELETE';

const initialState = {
	list:[
		{
			id: 1,
			title: 'event 1',
			start: '2021-10-14T10:00:00',
			end: '2021-10-14T12:00:00',
		},
		{
			id: 2,
			title: 'event 2',
			start: '2021-10-16T13:00:00',
			end: '2021-10-16T18:00:00',
		},
		{ id: 3, title: 'event 3', start: '2021-10-17', end: '2021-10-20' },
	]
}



// 액션 생성자

export function createBucket(contents) {
	console.log("액션을 생성할거야!")
	return {type: CREATE, contents: contents};
}

export function deleteBucket(contents_index) {
	console.log('지울 버킷 인덱스', contents_index)
  return { type: DELETE, contents_index };
}




// Reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		// do reducer stuff
		case CREATE: {  
			console.log("이제 값을 바꿀꺼야!")
			const new_contents_list = [...state.list, action.contents];
			return {list : new_contents_list};
		} 
		case DELETE: {
			console.log(state, action);
			const new_contents_list = state.list.filter((l, idx) => {
				// console.log(parseInt(action.bucket_index) !== idx, parseInt(action.bucket_index), idx);
				return parseInt(action.contents_index) !== idx;
			});
			console.log(new_contents_list);
			return {list: new_contents_list}
		}

		default:
			return state;
	}
}