import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = props => {
  return  <Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
};

//ReactDom.createPortal(렌더링 할 수 있는 자식노드(조건: JSX코드여야함), document.getElemetById('실제 렌더링 되는 DOM주소'))
//실제 렌더링되는 DOM주소는 public내부의 index.html에 만들어놓은 <div id="backdrop-root">를 말한다.(backdrop이 렌더링되었으면 하는 위치)
//document.getElementById는 리액트와 전혀 상관이 없다. 단지 DOM노드의 위치에 접근하기 위해 브라우저에서 제공하는 API를 사용한 것일 뿐.
//이 API를 사용하여 실제 DOM요소에 접근하는 것

const ErrorModal = (props) => {
  //35번째 줄에서  onConfirm을 사용하는 이유는 Backdrop함수 내에서 props.Confirm을 사용했기 떄문 ~
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay tilte={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
