if(true){
    var x =3; //var 는 함수 스코프
}
console.log(x);

if(true){
    const y =3 ;
}
console.log(y); //y값은 출력 되지 않음 const 가 블록스코프를 가지기 때문에  { } 
/*
var 은 함수 스코프를 가지므로 if문의 블록과 관계없이 접근할 수 있음

하지만 const 와 let은 블록 스코프를 가지므로 블록 밖에서는 변수에 접근 할 수 없음
블록의 범위는 if while for function 등의 중괄호임 
함수 스코프 대신 블록 스코프를 사용함으로 호이스팅 같은 문제도 해결되고 코드 관리도 수월 해짐

호이스트란, 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미합니다.
 즉, 변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위로, 
 함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경됩니다.
*/
function showName() {
     console.log("First Name : " + name);
     var name = "Ford";
     console.log("Last Name : " + name);
}
showName();
// First Name : undefined
// Last Name : Ford
// First Name이 undefined인 이유는 지역변수 name이 호이스트 되었기 때문입니다.

// const 와 let 이 var 와 다른점 어떤 스코프를 취하는지 
// const 와 let 의 차이
//const 는 상수 개념 let 은 변수 개념
/*
const 는 한번 대입하면 다른 값을 대입할 수 없다 . 
const 에 다른값을 대입하려고 하면 에러가 발생함. 또한 초기화시 값을 대입하지 않으면 에러가 발생함
*/
const a = 0; 
a=1;
//Uncaught TypeError: Assignment to constant variable.

const c;
//Uncaught SyntaxError: Missing initializer in const declaration

//let은 값 변경해도 오류 나지 않음
let b =0 ;
b=1;
1
/*
자바스크립트를 사용할 때 한번 초기화했던 변수에 다른값을 대입하는 경우는 의외로 적음.
따라서 기본적으로 변수 선언시에는 const를 사용하고 , 다른값을 대입해야 하는 상황이 생겼을때는 let을 사용하면됨
*/