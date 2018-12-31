/*
템플릿 문자열 
ES2015 문법에 새로운 문자열이 생김 
큰따옴표나 작은 따옴표로 감싸는 기존 문자열과는 다르게 백틱 ` 으로 감쌉니다. 
특이한 점은 문자열 안에 변수를 넣을 수 있음
*/

//기존 ES5문법을 사용한 문자열

var num1=1;
var num2=2;
var result=3;
var string = num1 +'더하기' +num2+'는 \'' +result +'\'';
//" 1더하기2는 '3' “

//ES6
const num3=1;
const num3=2;
const result2=3;
const string2=`${num3} 더하기 ${num4} '${result2}'`

/*
${변수} 형식으로 변수를 더하기 기호 없이 문자열에 넣을수 있음
기존 따옴표 대신 백틱을 사용하기 때문에 큰 따옴표와 작은 따옴표와 함께 사용할 수 있음
*/