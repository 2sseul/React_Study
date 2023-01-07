import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) =>{ 
    //만약에 아이템이 없으면 <H2>를 출력한다.
    //기존에 Expenses.js에서 처리해줘도 되는 일을 왜 이렇게 처리했을까?
    //다양한 조건에서 컴포넌트 안의 내용 전체가 바뀐다면, 이런 방법을 사용하는게 더 좋음...!
    //왜냐면 Expenses.js에서는 컴포넌트 내의 전체 내용이 바뀌는 것이 아니라,
    //컴포넌트의 일부만 변경되기 때문에 이런 방법은 부적절함.
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    //ul 사용한건 순서 없이 정렬하고 싶어서,
    return(
        <ul className="expenses-list">
            {props.items.map(expense => (
            <ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
            ))}
        </ul>
    )
}

export default ExpenseList;