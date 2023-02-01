import { useSelector, useDispatch } from "react-redux";
//useSelector: 저장소가 관리하는 상태 부분을 자동으로 선택할 수 있다.

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  //어떤 인자도 전달하지 않고 대신 실행할 수 있는 dispatch function
  //redux store에 대한 action을 보낸다.
  const dispatch = useDispatch();
  //저장소에서 추출하려는 데이터 부분 결정
  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload:10}
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  //toggle로 숨기고 보여지게 하는 것은 useState사용해서 관리해야한다.
  //왜냐믄요 이 컴포넌트에서만 쓰는거니까요...!(local state)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
