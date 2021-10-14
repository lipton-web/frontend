// import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
// import { produce } from "immer"; //불변성 관리 편하게
// import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";

// // actions
// const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER"; //리덕스에 유저 정보 넣기

// // action creators
// const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (user) => ({ user }));

// // initialState
// const initialState = {
//   user: null,
//   is_login: false,
// };


// // middleware actions
// // const loginFB = (id, pwd) => {
// //     return function (dispatch, getState, {history}) {
// //         auth
// //         .setPersistence(firebase.auth.Auth.Persistence.SESSION)
// //         .then((res) => {
// //             auth
// //             .signInWithEmailAndPassword(id, pwd)
// //             .then((user) => {
// //                 console.log(user);
// //                 dispatch(setUser({
// //                     user_name: user.user.displayName,
// //                     id: id,
// //                     user_profile: "",
// //                     uid: user.user.uid,
// //                 })
// //                 );
// //                 history.push('/');
// //             })
// //             .catch((error) => {
// //                 var errorCode = error.code;
// //                 var errorMessage = error.message;

// //                 console.log(errorCode, errorMessage);
// //                 window.alert(errorCode, errorMessage);
// //               });
// //         })
// //     }
// // }


// // const loginCheckFB = () => {
// //     return function( dispatch, getState, {history} ) {
// //         auth.onAuthStateChanged((user) => {
// //             if( user ) {
// //                 dispatch(
// //                     setUser({
// //                     user_name: user.displayName,
// //                     user_profile: '',
// //                     id: user.email,
// //                     uid: user.uid,
// //                 }))
// //             }else {
// //                 dispatch(logOut());
// //             }
// //         })
// //     }
// // }
// // const signupFB = (id, pwd, user_name) => {
// //   return function (dispatch, getState, {history}){
// //     auth
// //       .createUserWithEmailAndPassword(id, pwd)
// //       .then((user) => {
// //         console.log(user);
// //         auth.currentUser.updateProfile({
// //           displayName: user_name,
// //         }).then(()=>{
// //           dispatch(setUser({user_name: user_name, id: id, user_profile: '', uid: user.user.uid}));
// //           history.push('/');
// //         }).catch((error) => {
// //           console.log(error);
// //         });
// //         // Signed in
// //         // ...
// //       })
// //       .catch((error) => {
// //         var errorCode = error.code;
// //         var errorMessage = error.message;

// //         console.log(errorCode, errorMessage);
// // 				window.alert(errorCode, errorMessage);
// //       });
// //   }
// // }


// // const logoutFB = () => {
// //     return function (dispatch, getState, {history}) {
// //         auth.signOut().then(() => {
// //             dispatch(logOut());
// //             history.replace('/')
// //         })
// //     }
// // }




// // reducer
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("is_login", "success");
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         deleteCookie("is_login");
//         draft.user = null;
//         draft.is_login = false;
//       }),
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),
//   },
//   initialState
// );

// // action creator export
// const actionCreators = {
//   logOut,
//   getUser,
// };

// export { actionCreators };
















// // //API통신을 통해 서버에 id,pwd를 제공하고 유저 정보와 토큰을 받아 저장
// // const loginDB = (id, password) => {
// //   return function (dispatch, getState, { history }) {
// //     axios({
// //       method: "post",
// //       url: "http://13.125.249.241/user/login",
// //       data: {
// //         email: id,
// //         password: password,
// //       },
// //     })
// //       .then((res) => {
// //         console.log(res);
// //         dispatch(
// //           setUser({
// //             email: res.data.email,
// //             nickname: res.data.nickname,
// //           })
// //         );
// //         const accessToken = res.data.token;
// //         //쿠키에 토큰 저장
// //         setCookie("is_login", `${accessToken}`);
// //         document.location.href = "/";
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };
// // };

// // //회원가입 API
// // const signUpDB = (id, password, nickname) => {
// //   return function (dispatch, getState, { history }) {
// //     axios({
// //       method: "post",
// //       url: "http://13.125.249.241/user/signup",
// //       data: {
// //         email: id,
// //         password: password,
// //         nickname: nickname,
// //       },
// //     })
// //       .then((res) => {
// //         window.alert(res.data.result);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };
// // };














import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
import { produce } from "immer"; //불변성 관리 편하게
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER"; //리덕스에 유저 정보 넣기

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
export const signUpDB = (userid, pwd, gender, age, job, salary) => {
  axios({
    method: "post",
    url: "http://13.124.241.254/user/signup",
    data: {
      userid: userid,
      pwd: pwd,
      gender: gender,
      age: age,
      job: job,
      salary: salary,
    },
  })
    .then((res) => {
      window.alert(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signUpDB,
};

export { actionCreators };