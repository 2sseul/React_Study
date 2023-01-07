import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  //[]사용하면 동시에 두 개 이상의 요소에 값을 할당해줄 수 있다.
  //title = props.title(초기값)
  //setTitle = 나중에 새로운 title을 할당하기위해 호출되는 함수(값을 업데이트하는 함수)

  // const clickHandler = () => {
  //   setTitle('Updatced!'); //업데이트되는 state는 바로 업데이트되는 것이 아니라 업데이트를 예약해놓은 것.
  //   console.log(title); //그래서 콘솔에서 title을 찍었을 때 변경된 제목이 아니라 이전의 제목이 출력된다.
  // };

  //setTitle함수를 호출하는 것은 어떤 변수에 새로운 값을 할당하는 것이 아니라
  //const [title, setTitle] = useState(props.title); 구절이 메모리 어딘가에서 리액트로 관리된다.
  //그리고 useState('Update');  업데이트되는 함수를 호출할 때 이 변수는 새로운 값만 받는 것이 아니다.

  //state가 변할 때, 이 컴포넌트의 함수를 다시 호출하고 싶으면 state를 업데이트하는 함수를 호출하면된다.

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2 className='expense-item__price'>${props.amount}</h2>
      </div>
    </Card>
    // 버튼에 직접 이벤트를 주려면 on~을 사용해야한다.
    // 버튼에 직접 함수를 적으려면 {}안에 화살표 함수 작성하면 실행 가능 !
    // ex) <button onClick={()=>{console.log("Clicked!")}}>Change Title</button>
    // 하지만 그때그때 함수 생성해서 실행하는 것은 비효율적임.
  );
}

export default ExpenseItem;
