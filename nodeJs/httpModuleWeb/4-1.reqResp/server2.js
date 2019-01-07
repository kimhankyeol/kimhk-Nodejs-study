const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('./server2.html',( err , data )=>{
        if(err){
            throw err;
        }
        res.end(data);
    });
});

server.listen(8083,()=>{
    console.log('8083번 포트에서 서버 대기중입니다.');
});

//포트를 사용중이라면 다른포트로 연결하면됨
//이렇게 해서 포트만 다르게 해서 동시에 여러 노드 서버를 실행할수 도 있음!!!!!!!!!!!!!!!!!!!!!!!

/*
HTML 파일을 읽어와 클라이언트로 전송하는데 성공함
하지만 현재 서버는 클라이언트가 누군지 모름 
그냥 요청이 올때 모두에게 같은 응답을 보내고 있음
다음 배우는 쿠키와 세션에서 서버가 클라이언트가 누구인지 기억해서 클라이언트별로 다르게 응답하는 방법을 알아보겠음
*/