const{ odd, even } = require('./var');
const checkNumber =require('./func');
function checkStringOddOrEven(str){
    if(str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'))

//index 는 var.js func.js를 모두 참조 
//모듈 하나가 여러개의 모듈을 사용될수도 있음
//모듈로부터 값을 부러올떄 변수이름을 다르게 지정할수 있음 
//func.js 의 checkOddOrEven이 checkNumber 이라는 이름으로 사용되고 있음