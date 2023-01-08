import React from 'react';
//만약 현재 컴포넌트 내에 컴포넌트가 하나밖에 없을 시
//style-component 패키지를 통해 컴포넌트를 생성하게 된다면, 얘는 지워줘도 된다. 
//왜냐면 여기서 더이상 JSX 를 사용하지 않기 때문.

import styles from './Button.module.css';
//기존에 css파일 import할 때와 달리 객체명을 지정해줬다.
//css모듈을 사용하고 싶으면 css파일을 이런식으로 임포트해줘야한다.

//styled는 styled-components에서 임포트하는 객체이고 button메소드에 접근할 수 있다.
// import styled from 'styled-components';

//tagged template literals
//button은 styled객체의 메소드
//button() 괄호붙여서 호출하는 메소드 대신 백틱을 붙여서 호출한다.
//백틱 안에 입력한 것이 button 메서드 안에 들어간다.
//그리고 이 button메서드가 button 컴포넌트를 반환한다는 것.
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media(min-width:768px){
//       width: auto;
//     }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;


const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
