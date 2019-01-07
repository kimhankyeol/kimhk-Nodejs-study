//다음 예제 응답을 보내는 부분과 서버연결부분을 추가해보겠음
const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>hello node!!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080,()=>{
    console.log('8080번 포트에서 서버 대기중입니다.')
});
/*
createServer 메서드 뒤에 listen 메서드를 붙이고 클라이언트에게 공개할 포트번호와 포트 연결 완료후 실행될 콜백 함수를 넣어줌 
이제 이 파일을 실행하면 서버는 8080포트에서 요청이 오기를 대기함
listen메서드에 콜백함수를 넣는 대신 
listening 이벤트 리스너를 붙여도 됨
추가로 error 이벤트 리스너도 붙여보았음
*/