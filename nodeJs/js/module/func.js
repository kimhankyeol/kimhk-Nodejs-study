const { odd,even } = require('./var'); 

function checkOddOrEven(num){
    if(num%2){//나머지가 있으면 홀수 
        return odd;
    }else{//없으면 짝수
        return even;
    }
}

module.exports = checkOddOrEven;


/*
1.require 함수 안에 불러온 모듈의 경로를 적어줌 
2.require 함수의 인자로 제공하는 경로만 잘 지정해주면됨 
3.파일경로에서 js 나 json 같은 확장자는 생략할 수 있음
4. require함수로 var.js에 있던 값들을 불러오고 있음
//odd even에 var.js 에 module.exports에 담은 odd, even을
//func.js odd even에 선언함 
//또한 module.exports에는 객체만 대입해야 하는것이 아니라 함수나 변수에 대입해도 됨

*/