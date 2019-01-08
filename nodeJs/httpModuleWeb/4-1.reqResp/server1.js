//다음 예제 응답을 보내는 부분과 서버연결부분을 추가해보겠음
const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>hello node!!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080,()=>{
    console.log('8080번 포트에서 서버 대기중입니다.')
});
