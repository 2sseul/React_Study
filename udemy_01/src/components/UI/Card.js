import './Card.css';

function Card(props){
    //사용자 지정 컵포넌트인 <Card>내의 컨텐츠들에 className을 지정해주기 위해서는 css파일 내에서 지정한 card가 앞에 붙어야한다.
    //그래서 'card '를 앞에 붙이는 것, 앞에 붙이면 아래 컨텐츠들의 className에 자동으로 card 클래스명이 붙게된다. = 자동으로 css파일이 적용된다.
    //왜 이렇게 빼는가? 중복된 코드를 제거하고 컴포넌트를 깔끔하게 유지할 수 있기 때문임. 따로 빼놓은 코드를 이용해서 합성이 가능하다 ~
    const classes = 'card '+ props.className;
    return (
    <div className={classes}>{props.children}</div>
    )
}

export default Card;