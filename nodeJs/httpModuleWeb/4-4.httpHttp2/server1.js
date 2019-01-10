//간단한 http 서버

const http = require('http');
const fs = require('fs');
/*
http.createServer((req,res)=>{
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
}).listen(8080,()=>{
    console.log('8080번 포트에서 서버 대기중임');
});
*/
http.createServer((req,res)=>{
    fs.readFile('./kim.html',(err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen(8080,()=>{
    console.log('8080번 포트에서 대기중');
});

/*
이 서버에 암호화를 적용하려면 https 모듈을 사용해야함
하지만 https 는 아무나 사용할 수 있는것이 아님
암호화를 적용하는 만큼 그것을 인증해줄수 있는 기관도 필요함 
인증서는 인증기관에서 구입해야됨 
Let's Encrypt 같은 기관에서 무료로 발급해주기도함
인증서 발급과정은 복잡하고 도메인이 필요한경우도 있으므로 인증서를 발급받는 방법은 공부하는 책에서는 소개 하지 않음 
발급받은 인증서가 있으면 server1-1.js 참조
*/