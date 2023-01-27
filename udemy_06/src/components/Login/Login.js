import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//컴포넌트 바깥에 Reducer함수를 선언했는데, 이는 리듀서 함수 내부에서는 컴포넌트 함수 내에서 만들어진 어떤 데이터도 필요하지 않기 때문이다.
//컴포넌트 내에 만들어진 어떤 데이터와도 상호작용하지 않기 때문에 컴포넌트 바깥에서 선언해도 괜찮다.
//action으로 디스패치하는 것은 객체이다.
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value:action.val, isValid:action.val.includes('@')};
  }
  //최신 값을 가져오기 위해서는 state.value사용하면 된다.
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value, isValid:state.value.includes('@')};
  }

  //비어있는 스냅샷
  return {value:'', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid:action.val.trim().length>6 }
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid:state.value.trim().length>6}
  }
  return {value:'', isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  //useReducer로 전체 state를 다 감싸도 괜찮지만, 이메일만 감싸보겠습니다.
  //emailReduecer를 실행하도록 useReducer에 리듀서 함수를 전달했다.
  const [emailState, dispatchEmail ] = useReducer(emailReducer,{
    value: '',
    isValid: undefined,//또는 null로 설정하면 invalid로 처리되지 않는다.
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  })

  //객체 디스트럭처링 구문(별칭할당)
  const { isValid:emailIsValid } = emailState;
  const { isValid:passwordIsValid} = passwordState;

  //컴포넌트가 처음 마운트 되었을 때 실행된다.
  //즉 로그인 컴포넌트가 처음으로 렌더링 될 때,
  //모든 컴포넌트 렌더링 주기 후에 실행.
  useEffect(()=>{
    console.log('EFFECT RUNNING');
  });

  useEffect(()=>{
    //setTimeout함수를 사용하는 이유는, 입력이 들어올 때 마다 상태를 업데이트 해주기 때문에
    //이를 방지하기 위해 사용자의 입력이 일정시간 없을 때, 유효한지를 검사해주기 위함임.
    const identifier = setTimeout(()=>{
      console.log('Checking from validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500);

    //useEffect가 다음 번에 함수를 실행하기 전에 클린업 프로세스로 실행된다.
    // 모든 사이드이펙트 함수가 실행되기 전, 컴포넌트가 제거되기 전,
    return () => { 
      console.log('CLEANUP');
      //새로운 타이머를 설정하기 전 마지막 타이어를 지우는 clearTimeout 
      clearTimeout(identifier);
    };
  },[emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //dispatchEmail을 호출하여 업데이트한다.
    //그리고 업데이트한것을 action에 전달.
    //action은 뭐지? 마음대로 정할 수 있다. 다만, 보통은 어떤 식별자를 가지고 어떤 필드를 가지는 객체이다.
    //val이라는 payload는 굳이 필요 없지만, 여기서는 사용자가 입력한 값을 넣어줘야 하니까 evnet.target.value 넣어준다.

    dispatchEmail({type:'USER_INPUT',val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   passwordState.isValid && event.target.value.trim().length > 6
    // );
  };

  //여기서는 굳이 val이 필요 없는데, 그 이유는 우리가 input내부에 어떤 문자열이 들어왔는지 체크해야하는 것이 아니라
  //input에 포커스 아웃 되었는지 확인하기만 하면 되기 때문.

  const validateEmailHandler = () => {
    dispatchEmail({
      type:'INPUT_BLUR',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type:'INPUT_BLUR',
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.value === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
