import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  //모든 리액트 훅과 마찬가지로 함수형 컴포넌트 내부에서만 사용 가능하다.
  //초기화하려는 기본값이 필요하지만 여기서 중요하진 않음.
  //여기서 중요한건 useRef();가 무엇을 반환하는가.
  //왜냐하면 나중에 해당 ref와 작업할 수 있게 해주는 값을 반환해주기 때문임 ~
  //즉 요소와 연결하여 해당 요소와 작업할 수 있게 해준다.

  //초기값은 undefined. 기본값임. 쓸모는 없음.
  //이제 리액트에 ref와 연결하고싶다고 알려줘야함.
  //ref와 연결하려는 해당 요소에 가서 ref prop을 연결해주면 된다.
  const nameInputRef = useRef();
  //nameInputRef안에 있는 요소는 실제 DOM요소가 될 것.
  //nameInputRef를 통해 출력되는 값은 항상 객체!
  //그리고 항상 current 프롭을 가지고 있다.
  //current prop은 그 ref가 연결된 실제 값을 가진다.
  const ageInputRef = useRef();

  //값을 가져오기 위해 더이상 state를 사용하지 않기 때문에 이제 state 없어도 된다 !
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //state는 필요하지 않다. ref가 input과 연결이 되면서, nameInputRef의 current의 value값이 input안에 집어넣은 값과 연결되었기 때문.
    //상태 변화를 감지하는 state가 불필요해짐.
    const enteredName = nameInputRef.current.value;
    const entereUserdAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || entereUserdAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+entereUserdAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, entereUserdAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
