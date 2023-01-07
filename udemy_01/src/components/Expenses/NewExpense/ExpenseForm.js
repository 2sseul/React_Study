import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
// form내부에 있는 입력값들의 초기값을 저장하기 위한 useState();
// 처음에는 빈칸이 들어있는데, 초기에는 폼 내부가 빈칸으로 시작하기 때문이다.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
// 이 세가지 경우는 useState를 3번 반복한거나 다름 없는 상황임,
// 결국 상태 변경을 3번이나 반복한것. 하나의 State로 관리할 수는 없을까?
//   const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// })

  const titleChangeHandler = (event) => {
    //변경된 값을 저장하기 위해 사용되는 setEnteredTitle
    setEnteredTitle(event.target.value);
    // setUserInput({
        //만약 state가 객체를 관리하는 경우, 하나의 key와 value 쌍만을 가져온다면,
        //나머지 다른 key들(Amount, Date)은 사라져버리게 된다.
        //이 경우를 방지하기 위해서 ...userInput을 새로운 객체 setUserInput에 복사하고,
        //enteredTitle: evnet.target.value 로 enteredTitle을 오버라이딩한다.
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    //다만 위와 같은 방법은 이전의State에 의존하고 있기 때문에, 잘못된 State상태에 의존하게 될 경우가 다분함.
    //이전의 상태에 의존하고 있는 경우에는 익명함수를 사용해서 state관리를 해주는 것이 좋다.
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value,
    //     }
    // })
  };
  //event 내부의 target 안의 value에는 input에 타이핑한 값이 저장된다.

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    //preventDefault사용하면 기본적으로 보내지는 자바스크립트를 방지할 수 있음
    //페이지 리로드 방지할 수 있음
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
        //날짜객체로 변환한 enteredDate를 전송한다.
    }

    //자식 컴포넌트에서 onSaveExpenseData함수에 expenseData를 인자로 전달하면,
    //부모 컴포넌트에서 정의된 동일한 함수 onSaveExpenseData에서 파라미터로 데이터를 받아올 수 있다.
    props.onSaveExpenseData(expenseData);

    //submit이후에 빈칸으로 만들어주기 위함
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    console.log(expenseData);
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
            value={enteredTitle} 
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
