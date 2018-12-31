//화살표 함수라는 새로운 함수가 추가되었으며 , 기존의 function(){}도 그대로 사용할수 있음
//기존 예
function add1(x,y){
    return x+y;
}

//화살표 함수
const add2 = (x,y) => {
    return x+y;
}

const add3 = (x,y) => (x+y);

//기존 예 not 
function not1(x){
    return !x;
}

//화살표 함수 not
const not2 = x => !x;

/*
function 대신 =>기호로 함수를 선언함  또한 변수에 대입하면 나중에 재사용 할수 있음

화살표 함수는 return 문을 줄일 수 있음
add3 과 add4처럼 return할 식을 바로 적어주면 됨
 */

//기존의 function 과 다른 점은  this 바인드 방식임 . 다음 예제를 봄
// 예)
var relationship1={
    //key : value
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends:function(){
        var that = this;//relationship1을 가리키는 this를 that에 저장
        //아래 함수를 하나 더 타면 this가 다른 곳을 가리키기 때문에  that 에다가 this를 선언
        this.friends.forEach(function(friend){
            console.log(that.name,friend); //that.name 은 relationship1.name 을 가리킴 zero
        });
    }
};

relationship1.logFriends();
/*
console 에는
zero nero
zero hero
zero xero
*/

const relationship2={
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name, friend);
        })
    }
};

relationship2.logFriends();
/*
console 에는
zero nero
zero hero
zero xero
*/

/*
relationship1.logFriends() 안의 forEach 문에서는 function선언문을 사용 . 
각자 다른 함수 스코프의 this를 가지므로 that이라는 변수를 사용해서 relationship1에 간접적으로 접근 
하지만 relationship2.logFriends()안의 forEach 문에서는 화살표 함수를 사용
따라서 바깥 스코프인 logFriends() 의 this를 그대로 사용할수 있음. 상위 스코프의 this를 그대로 물려받는 것

따라서 기본적으로 화살표 함수를 쓰되 this를 사용해야 하는 경우에는 화살표 함수와 함수선언문 둘중 하나를 고르면됨
*/

//추가 설명
/*
함수는 메소드 실행으로 잘 동작한다. 함수는 this 라 불리는 특별한 변수를 가짐
this는 메소드를 호출되는 객체를 참조 .  
다른 자유 변수들과는 다르게 this 는 둘러싸인 코드의 lexical scopes를 탐색하지 않음.
this는 실행되는 시점을 통해 함수로 전달 
함수는 this를 동적으로 전달받기 때문에 여기서의 this는 dynamic this로 불림
lexical 정적 
lexical scope 
스코프는 함수를 호출할 때가 아니라 선언할 때 생김
*/

//예)
var name = 'zero'; //(*)
function log(){
    console.log(name);
}

function wrapper(){
    name= 'nero';//(*)
    log();
}
wrapper();
//여기서는 console 에 nero 찍힘

//다른 예)
var name = 'zero'; //(*)
function log() {
  console.log(name);
}

function wrapper() {
  var name = 'nero';   //(*)
  log();
}
wrapper();

//여기서는 nero 가 아닌 zero 가 console에 찍힘
/*
그 이유는 스코프는 함수를 선언할떄 생김
log 안의  name 은  wrapper 안의 지역 변수 name이 아니라 전역변수 name을 가리키고 있음
자세히 살펴보면 log()의 선언 위치를 보면됨 wrapper 안에서 일어났지만 선언 위치상 전역변수 name을 가리키기 때문 

이런것을 정적 스코프  , lexical scoping
다시 설명하자면 
함수를 처음 선언하는 순간 , 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 참조하게됨

함수는 서브루틴 실행으로는 잘 동작하지 않는다. 
왜냐하면 함수의 this 는 동적이기 때문임.
서브루틴 호출은 this를 전역객체로 가지거나 엄격모드에서는 undefined 로 셋팅
불행히 서브루틴은 서브루틴만의 this를 사용하지 않고 그것을 둘러싸고 있는 메소드의 this를 참조한다. 그래서 자체 this 접근이 불가능하다

var relationship1 ={
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends:function(){
        var that = this; //(*)
        this.friends.forEach(function(friend){
            console.log(that.name,friend);
        })
    }
};
relationship1.logFriends();


forEach의 인수는 서브루틴이다.
 
서브루틴:서브 루틴은 어떤 프로그램이 실행될 때 불려지거나 반복해서 사용되도록 만들어진 일련의 코드들을 지칭하는 용어

logFriends의 this에 접근하기 위해서는 //(*) 지점에서 보이는 별도의 선언이 필요함
서브루틴은 명백히 lexical this를 가졌어야함 .
이 말은 서브루틴에서의 this  역시 다른 자유변수와 동일한 취급을 받았어야 했다는 것을 의미한다.
 그리고 인접한 lexical  scopes를 참조했어야한다.
that = this는 좋은 해결방법이다. 
이 방법의 의도로는 lexical this에 접근할 수 있다,
다른 해결방법으로는 bind를 사용

이건 예제 찾아서 해보기

*/