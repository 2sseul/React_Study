import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;

// 만약 Todo 객체 전체를 받는 방법을 사용한다면,

// import Todo from "../models/todo";

// const TodoItem:React.FC<{todo: Todo}> = (props) => {
//     return <li>{props.todo.text}</li>
// }
