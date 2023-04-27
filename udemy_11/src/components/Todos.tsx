// props는 객체고 items를 키로 가지며 문자열 배열을 값으로 갖는다는 뜻
// props: { items: string[] }

//타입 정의
// React import > Todos에 타입 지정 React.FC
// React.FC로 지정 = 이 프로젝트가 함수형 컴포넌트로 동작한다는 것을 명시
// FC뜻은 함수형 컴포넌트(Functional Component)

// FC 자체가 제네릭타입
// FC 타입의 기능은 어떤 객체 타입을 정의하든 객체의 기본타입, childern 프로퍼티와 합쳐주는 기능

import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

//<{}> 홀화살표는 제네릭을 만드는 구문임
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

//bind는 자바스크립트에서 제공하는 메서드로 메서드를 사용하면 실행할 함수를 미리 설정할 수 있다.

export default Todos;
