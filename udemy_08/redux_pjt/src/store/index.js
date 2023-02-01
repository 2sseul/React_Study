// //여기에 리덕스 코드 들어옴.
// // import { createStore } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialCounterState = { counter: 0, showCounter: true };

// //초기 상태 객체 아래에서 createSlice호출.

// //slice를 사용하려면, createSlice호출해서 반환값을 사용해야한다.
// const counterSlice = createSlice({
//   //전역 상태의 slice를 만들어야한다.
//   name: "counter", //모든 slice는 이름이 있어야한다.
//   initialCounterState, //초기상태
//   reducers: {
//     //리듀서는 객체 혹은 맵. 객체 안에 메서드가 존재하면 된다.
//     increment(state) {
//       //redux toolkit과 createSlice를 사용하면 기존의 상태를 바꿀 수 없음.
//       state.counter++;
//     }, //여기 있는 모든 메서드는 최근 값 state를 받는다.
//     decrement(state) {
//       state.counter--;
//     }, //더이상 action을 넣을 필요 없음.(서로 다른 메서드가 호출되기 때문.)
//     //increase에는 payload가 필요하다.(추가데이터가 필요함)'
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// // const counterReducer = (state = initialState, action) => {
// //   if (action.type === "increase") {
// //     return {
// //       //action.amount: action payload
// //       counter: state.counter + action.amount,
// //       showCounter: state.showCounter,
// //     };
// //   }

// //   if (action.type === "decrement") {
// //     return {
// //       counter: state.counter - 1,
// //       showCounter: state.showCounter,
// //     };
// //   }

// //   if (action.type === "toggle") {
// //     return {
// //       showCounter: !state.showCounter,
// //       counter: state.counter,
// //     };
// //   }

// //   return state;
// // };

// // const store = createStore(counterReducer);

// //configureStore에 객체를 전달한다. 리듀서함수가 아니라 객체를.
// const store = configureStore({
//   //configureStore 객체 내부에서 reducer프로퍼티를 정의한다.
//   //redux에는 전역 상태를 담당하는 단 하나의 주요 리듀서 함수만 있어야한다.
//   //여기서는 단일 리듀서 함수를 정의할 수 있다 ex) reducer: counterSlice.reducer
//   //어플리케이션 규모가 커질수록 reducer함수가 많아지기때문에 map으로 묶는걸 추천
//   //{}객체로 묶어서 모든 리듀서를 하나의 큰 리듀서로 병합
//   // reducer: { counter: counterSlice.reducer }
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// //액션을 전달하려면 createSlice로 전달할 수 있다.
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
