import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

//label에 htmlFor 속성을 추가해 이 프로퍼티가 가리키는 값에 text를 넣어준다
//그리고 id="text"로 설정해 레이블과 연결한다(input과 연결해서 접근할 수 있도록)

//사용자 입력을 받아오는 방법
//1. useState를 사용해 키가 눌릴 때마다 이벤트를 수신하는 방식
//2. Ref를 사용해 한 번에 입력을 가져오는 방식(폼이 제출될때만 가져오기)
//여기서는 2번 사용해서 해볼거임

//우리는 submitHandler함수를 onSubmit 프로퍼티에 연결할것.
//그렇기 때문에 event 객체에 타입을 지정해줘야하는데
//event: React.FormEvent 지정해줘야한다.
//FormEvent는 특수타입으로 리액트 패키지가 제공하는 타입이다.
//이 event 객체 타입은 폼 제출 이벤트를 수신하면 자동적으로 받게된다.

//cf) 비슷한 예로 React.MouseEvent가 있는데, 이건 onClikc이벤트 리스너를 등록하면 받게된다.
//cf) 폼 제출의 경우 React.FormEvent

//이렇게 선언해줘야 event.preventDefault();를 호출할 수 있다.

//input 요소 타입은 HTMLInputElement
//button 요소 타입은 HTMLButtonElement
//paragraph 요소 타입은 HTMLParagraphElement

//ref 선언할 때 ()안에 기본값을 설정해줘야한다.
//기본값을 설정하지 않으면 다른 값이 할당되어 있을 수 있기 떄문에
//처음에 만들 때는 연결할 것이 없기 때문에 null 할당.

//const enteredText = todoTextInputRef.current?.value;
//레퍼런스가 요소와 연결이 되어있다는 사실을 알고 있다면 ?가 아닌 !를 사용해도 된다.
//!는 이 값이 null이 될 수 있다는 건 알지만 이 시점에서는 절대 null이 아니라고 알려준다.
//그래서 !는 null이 아니라고 100% 확신하는 경우에만 사용해야한다.
//여기서는 !를 사용해도 되지만 주의해야함.

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
