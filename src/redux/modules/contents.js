// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// 액션
const CREATE = "contents/CREATE";
const UPDATE = "contents/UPDATE";
const DELETE = "contents/DELETE";

const initialState = {
  list: [
    // {"recordId":1,"category":"식비","cost":8000,"contents":"OO국밥","year" : 2021,"month" : 10,"date":11},
    {
      recordId: 1,
      title: "식비 OO국밥 8000",
      cost: 8000,
      contents: "OO국밥",
      date: "2021-10-14",
      backgroundColor: "#FAA2C1",
    },
    {
      recordId: 2,
      title: "교통비 택시비 8000",
      cost: 8000,
      contents: "교통비 ㅎ",
      date: "2021-10-14",
      backgroundColor: "#E599F7",
    },
    {
      recordId: 3,
      title: "주거비 월세 8000",
      cost: 8000,
      contents: "OO국밥",
      date: "2021-10-14",
      backgroundColor: "#66D9E8",
    },
    {
      recordId: 4,
      title: "뷰티 및 패션 옷가게 8000",
      cost: 8000,
      contents: "OO국밥",
      date: "2021-10-14",
      backgroundColor: "#63E6BE",
    },
    {
      recordId: 5,
      title: "취미활동 CGV 8000",
      cost: 8000,
      contents: "OO국밥",
      date: "2021-10-14",
      backgroundColor: "#FFE066",
    },
  ],
};
{
  /* <option value="식비">식비</option>
<option value="교통비">교통비</option>
<option value="주거비">주거비</option>
<option value="뷰티 및 패션">뷰티 및 패션</option>
<option value="취미활동">취미활동</option> */
}
// 액션 생성자
export function createContents(contents) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, contents: contents };
}
export function deleteContents(contents_index) {
  console.log("지울 버킷 인덱스", contents_index);
  return { type: DELETE, contents_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case CREATE: {
      console.log("이제 값을 바꿀꺼야!");
      const new_contents_list = [...state.list, action.contents];
      return { list: new_contents_list };
    }
    case DELETE: {
      console.log(state, action);
      const new_contents_list = state.list.filter((l, idx) => {
        // console.log(parseInt(action.bucket_index) !== idx, parseInt(action.bucket_index), idx);
		return parseInt(action.contents_index) !== idx;
	  });
      console.log(new_contents_list);
      return { list: new_contents_list };
    }
    default:
      return state;
  }
}
