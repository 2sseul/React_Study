import React from "react";

import './AddUser.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const addUserHandler = event => {
        event.preventDefault();
        
    };

    //htmlFor는 자바스크립트에서 label에 for의 속성을 할당하는 props의 이름.
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" />
            <Button type="submit"/>
        </form>
    )
};

export default AddUser;