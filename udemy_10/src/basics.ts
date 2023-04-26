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
let person: {
  name: string;
  age: number;
};

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
