const redux = require("redux");

//저장소를 만들어야 한다.
//리듀서 함수를 만들어야 한다.
//액션과 컴포넌트도 필요하다.
//저장소를 구독하기 위한 설정코드도 필요하다.

//기본값으로 state와 action을 받아온다.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    //새로운 상태 리턴(대부분이 객체)

    //저장소가 초기화 될 때 리덕스가 이 리듀서를 처음으로 실행한다.
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    //새로운 상태 리턴(대부분이 객체)

    //저장소가 초기화 될 때 리덕스가 이 리듀서를 처음으로 실행한다.
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//어떤 리듀서가 저장소를 변경하는지 store가 알아야한다.
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  //getState는 createStore로 생성된 저장소에서 사용할 수 있는 메소드
  //업데이트 된 후에 최신 상태 스냅샷 제공
  const latestState = store.getState();
  console.log(latestState);
};

//counterSubscriber를 실행하지 않고 가리키고 있음.
//리듀서와 구독함수를 모두 리덕스가 실행하기 때문.
store.subscribe(counterSubscriber);

//액션을 만들고 전송
//일반적으로 여기서 사용하는 것은 문자열.(고유한 문자열)
//발송하는 고유한 액션들이 리듀서에서 다른 것들을 트리거 한다.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
