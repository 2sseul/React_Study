import React, { useState } from "react";

import './AddUser.css'
import Button from '../UI/Button';
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    //useState를 호출해서 초기시작상태를 디폴트로 정의 
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            return;
        }
        //enteredAge는 기본적으로 문자열이라, +를 앞에 붙여주면 확실한 숫자형
        if(+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    //htmlFor는 자바스크립트에서 label에 for의 속성을 할당하는 props의 이름.
    return(
        <div>
            <ErrorModal />
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler }>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;