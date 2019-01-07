/*
fs 모듈은 파일시스템에 접근하는 모듈임
즉 파일을 생성하거나 삭제하고 읽거나 쓸수 있음
폴더도 만들었다 지웠다 할수 있음
웹 브라우저에서 자바스크립트를 사용할때는 파일 다운로드와 파일 시스템이 접근이 금지되어 있으므로 노드의 fs 모듈이 낯설수 있음
*/
const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
/*
fs 모듈을 불러온뒤 읽을 파일의 경로를 지정함
유의할 점은 콜백함수도 readFile메서드의 인자로 같이 넣어준다는 것
이 콜백 함수의 매개변수로 에러 또는 데이터를 받음
파일을 읽다가 무슨 문제가 생기면 에러가 발생할 것이고 정상적으로 읽었으면 다음과 같이 콘솔에 결과가 나올것
*/

/*
console.log(data)를 했더니 Buffer 라는 이상한것이 출력됨
data에 toString()을 붙여서 로그를 찍었더니 제대로 문자열이 출력
readFile의 결과물은 버퍼라는 형식으로 제공됨 
지금은 단순히 버퍼를 메모리의 데이터라고 생각하면됨
*/