/*
객체 리터럴
리터럴- 코드상에서 데이터를 표현하는 방식을 리터럴이라고함

객체 리터럴(object literal)을 사용해 객체를 생성하는 방법은 Object 객체의 구조를 정의하고 
생성하는 구문을 하나로 합칠 수 있어서 new와 Object 생성자를 이용해 객체를 생성하고 
필요한 구조를 만들어가는 과정을 좀 더 간소화할 수 있습니다.
그래서 코드가 간결해지고 가독성(readability)이 높아집니다.
*/

//객체 리터럴에는 편리한 기능이 추가됨

//oldObject 객체에 동적으로 속성을 추가하고 있는 예
var sayNode =function(){
    console.log('Node');
}
var es = 'ES';
var oldObject ={
    sayJS:function(){
        console.log('JS');
    },
    sayNode: sayNode
};
oldObject[es+6] = 'Fantastic';

oldObject.sayNode();//Node
oldObject.sayJS();//JS
console.log(oldObject.ES6);//Fantastic

//위의 예제를 다음과 같이 다시 쓸수 있음  다시 한번 더 공부하기 !!!!
var sayNode2 =function(){
    console.log('Node2');
}
var es2 = 'ES';
const newObject = {
    sayJs2(){
        console.log('JS2');
    },
    sayNode2,
    [es2+6]:'Fantastic2'
}

newObject.sayNode2(); // Node2
newObject.sayJs2(); //JS2
console.log(newObject.ES6); //Fantastic2


//비교
/*
oldObject 와 newObject를 비교해보면 sayJS 같은 객체의 메서드에 함수를 연결할 때 콜론(:) 과 function을 붙이지 않아도 됨

sayNode :sayNode처럼 속성명과 변수명이 겹치는 경우에는 한번만 쓸 수 있음 
sayNode : sayNode    ----->sayNode  그래서 코드의 중복을 피할 수 있음
sayNode2 : sayNode   이건 하나로 못줄임
{name:name , age:age} //ES5
{name, age}//ES6

객체의 속성명을 동적으로 생성 할 수 있음
예전 문법에서는 ES6라는 속성명을 만들려면 객체 리터럴(oldObject) 바깥에서 [es+6]을 해야했음
하지만 ES2015 /  ES6 에서는 객체리터럴 안에 선언해도 됨
newObject 안에서 [es+6]가 속성명으로 바로 사용되고 있음

객체 리터럴에 추가된 문법은 코딩시 편의를 위해 만들어진 것이라는 느낌이 강함 
익숙해지면 코드의 양을 많이 줄일수 있음
*/