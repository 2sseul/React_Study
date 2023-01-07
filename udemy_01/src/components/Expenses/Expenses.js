import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props){
    //양방향 바인딩을 통해 드롭다운의 기본 년도를 설정할 수 있다.
    //filteredYear를 사용자지정컴포넌트에 selected={filteredYear}로 전달하면,
    //사용자지정컴포넌트 내부에서 props.selected로 접근할 수 있고,
    //dropdown에서 value값을 지정해주면 그 값으로 기본값을 지정해줄 수 있다.
    const [filteredYear, setFilteredYear] = useState('2020');

    //필터를 통해 년도별 아이템 목록을 출력하고 싶음.
    //filter()메소드를 사용해서 배열의.date.getFullYear().toString()으로 년도만 가져온 뒤,
    //가져온 연도와 필터링된연도가 같으면 filteredExpenses배열에 남겨두는 것.
    //filteredExpenses배열은 우리가 매핑하고 싶은 배열이기 때문에
    //(32번째 줄)props.item.map 에서 filteredExpenses.map으로 변경해준다.
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const expenseFilterDataHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onExpenseFilterData={expenseFilterDataHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    )
}

export default Expenses;