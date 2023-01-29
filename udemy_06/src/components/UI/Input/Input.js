import React, { useRef, useImperativeHandle } from "react";
//useImperativeHandle: 컴포넌트나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용할 수 있게 해준다.
//일반적인 state props관리를 통하지 않고 부모 컴포넌트의 state를 통해 컴포넌트를 제어하지 않고
//프로그래밍적으로 컴포넌트에서 무언가를 직접 호출하거나 조작해서 사용할 수 있게 해준다.
//다만, 거의 사용하지 않음 !!!!!!! 자주 사용하면 안됩니다.
//Ref는 예약어이기 때문에 Login.js input의 props값으로 넘어와도 Input.js에서 사용될 수 없음 ..~~
import classes from "./input.module.css";

//Input에서 props말고 두번째 매개변수인 ref를 받아올 수 있다.
//ref를 외부에서 설정해야 하는 경우, ref를 설정할 수 있다는 것을 확실시 하기 위해 부모컴포넌트에서 ref를 추가해서 넘겨줘야한다.
//하지만 이렇게 받아와서 useImperativeHandle에서 첫번째 매개변수로 넣는다고해서 사용할 수 있는 것은 아니다.
//ref를 사용하기 위해서는 컴포넌트 함수를 특별한 방법으로 내보낼 필요가 있다.(특별한 것으로 감싸줘야한다.)
//React.forwardRef()
const Input = React.forwardRef((props, ref) => {
  //inputRef를 만들기 위해 useRef사용
  const inputRef = useRef();
  //컴포넌트가 렌더링 된 후에 인풋 포커스 하려면 useEffect 필요
  //useEffect안에 넣은 함수는 컴포넌트 렌더링 주기 후 마다 실행된다.
  //   useEffect(() => {
  //     //inputDOM에 접근하기 위해서는 inputRef.current를 사용해야한다.
  //     inputRef.current.focus();
  //   }, []);

  //두번째 매개변수는 함수. 객체를 반환해야 하는 함수.
  useImperativeHandle(ref, () => {
    //내부함수 혹은 내부 변수 등 외부에서 접근할 수 있어야 하는 것을 가리킨다.
    return {
      focus: activate,
    };
  });

  const activate = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        defaultValue={props.value}
        onChange={props.onChage}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
