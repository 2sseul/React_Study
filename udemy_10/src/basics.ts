// Primitives: number, string, boolean
// More complex types : arrays, objects
// Function otypes, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ["Sports", "Cookking"];

//any는 예비적으로 사용하는 타입이므로, 사용하지 않는 것이 좋다.
// let person: any;

//하나의 구조만 가지는 객체를 저장하고 싶음
//bool 타입을 가지는 person 객체는 저장하고 싶지 않음

//타입 별칭 지정
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

//people에 name,age구조를 가진 객체 하나를 저장하는 것이 아니라
//객체 배열을 저장하겠다고 표시한 것,
//let people: {}[];
let people: {
  name: string;
  age: number;
}[];

//type inference(타입추론)

let cousre = "React - The Complete Guide";

// cousre = 12341;
// 유니온 타입은 타입을 정의할 때 한 개 이상의 타입을 사용할 수 있다.
// 첫번째 타입 뒤에 | 넣고 뒤에 다른 타입 추가하면 된다
// let course string | number | boolean = 'React - The Complete Guide';
// 유니온 타입은 타입을 지정한 곳이면 어디서든 사용 가능하다.
// 타입추론을 사용하는 경우가 아니라면 !

//Function & types

function add(a: number, b: number) {
  return a + b;
}
