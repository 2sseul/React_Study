import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//컴포넌트 바깥에 Reducer함수를 선언했는데, 이는 리듀서 함수 내부에서는 컴포넌트 함수 내에서 만들어진 어떤 데이터도 필요하지 않기 때문이다.
//컴포넌트 내에 만들어진 어떤 데이터와도 상호작용하지 않기 때문에 컴포넌트 바깥에서 선언해도 괜찮다.
 
const emailReducer = (state, action) => {};

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  //useReducer로 전체 state를 다 감싸도 괜찮지만, 이메일만 감싸보겠습니다.
  const [emailState, dispatchEmail ] = useReducer(emailReducer);

  //컴포넌트가 처음 마운트 되었을 때 실행된다.
  //즉 로그인 컴포넌트가 처음으로 렌더링 될 때,
  //모든 컴포넌트 렌더링 주기 후에 실행.
  useEffect(()=>{
    console.log('EFFECT RUNNING');
  });

  // useEffect(()=>{
  //   //setTimeout함수를 사용하는 이유는, 입력이 들어올 때 마다 상태를 업데이트 해주기 때문에
  //   //이를 방지하기 위해 사용자의 입력이 일정시간 없을 때, 유효한지를 검사해주기 위함임.
  //   const identifier = setTimeout(()=>{
  //     console.log('Checking from validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   },500);

  //   //useEffect가 다음 번에 함수를 실행하기 전에 클린업 프로세스로 실행된다.
  //   // 모든 사이드이펙트 함수가 실행되기 전, 컴포넌트가 제거되기 전,
  //   return () => { 
  //     console.log('CLEANUP');
  //     //새로운 타이머를 설정하기 전 마지막 타이어를 지우는 clearTimeout 
  //     clearTimeout(identifier);
  //   };
  // },[enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
