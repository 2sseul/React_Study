import React, { useState } from "react";  //사실 리액트 임포트는 굳이 안해도 되긴 함 ~
//JSX가 리액트 라이브러리를 사용하고 있다는 사실을 확인시키기 위함임
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

//파라미터 이름과 함수 이름은 임의로 작성한 것임
//함수가 가리키는 또다른 함수에서 파라미터로 임의의 이름을 지정해준다 (여기서 말하는 파라미터는 자식컴포넌트에서 보낸 인자값(expenseData)임)

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
};

const [isEditing, setIsEditing] = useState(false);

const startEditingHandler = () => {
    setIsEditing(true);
};

const stopEditingHandler = () => {
    setIsEditing(false);
};

    //사용자 지정 컴포넌트 ExpenseForm에 on속성(임의로 이름부여)을(=함수) 주고,
    //이 함수로(onSaveExpenseData) 또 다른 함수(saveExpenseDataHandler)를 가리키게 만듬
    //또 다른 함수 saveExpenseDataHandler는 함수를 실행시키거나, 작동하게 하지 않고 단지 가리키고 있을 뿐
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;