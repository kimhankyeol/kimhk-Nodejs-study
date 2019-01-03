const A = require('./globalA'); //globalA.js 를 globalB.js 에서 사용하기 위해 선언
global.message = '안녕하세요';
console.log(A())

//globalA 모듈의 함수는 global.message 값을 반환함 
//globalB.js 에서는 global객체의 속성명이 message 값을 대입하고 
//globalA 모듈의 함수를 호출함
//콘솔결과를 보면 globalB에서 넣은 global.message 값을 globalA에서도 접근할 수 있음

//주의!! 글로벌  객체를 남용해서는 안됨 
//프로그램의 규모가 커질수록 어떤파일에서 global 객체에 값을 대입했는지 찾기 힘들어 유지보수에 어려움을 겪게 됨
//다른 파일의 값을 사용하고 싶다면 모듈형식으로 만들어서 명시적으로 값을 불러와 사용하는것이 좋음