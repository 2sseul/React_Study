import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const INITIAL_EXPENSES= [
  {
    id:'e1',
    title:'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 2, 3),
  },
  {
    id:'e2',
    title:'NoteBook',
    amount: 129.12,
    date: new Date(2020, 5, 13),
  },
  {
    id:'e3',
    title:'iPhone',
    amount: 900.32,
    date: new Date(2022, 5, 14),
  },
  {
    id:'e4',
    title:'Computer',
    amount: 695.39,
    date: new Date(2021, 7, 3),
  }
]

const App = () => {
  //어떤 함수라도 선택가능한 구문 = function함수로 작성하는 대신 화살표 함수를 이용해서 작성

  //연습용 배열로 가득찬 초기 상태값을 가지는 useState
const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

//새로운 데이터를 추가해주는 함수 addExpensesHandler
const addExpenseHandler = expense => {
  // 기존에 있던 배열에서 새롭게 추가되는 배열이 항상 1번이게 추가하고자 함
  // 배열 안에 [expense(추가하려는 배열), ...기존배열(복사)] 이렇게 하게 되면
  // 이전의 상태에 의존하는 state때와 같이 불안정한 상태에 의존해야하는 경우가 생기게 된다.
  // setExpenses([exepense, ...expenses ]);
  setExpenses(prevExpense => {
    return [expense, ...prevExpense]
  })
  //이러한 방법이 이전의 상태에 의존하면서 새로운 값을 추가할 때 상태를 업데이트 할 수 있는 가장 깔끔한 방법.
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}
 
export default App;
