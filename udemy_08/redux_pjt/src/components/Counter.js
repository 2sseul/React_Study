import { useSelector } from "react-redux";
//useSelector: 저장소가 관리하는 상태 부분을 자동으로 선택할 수 있다.

import classes from "./Counter.module.css";

const Counter = () => {
  //저장소에서 추출하려는 데이터 부분 결정
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
