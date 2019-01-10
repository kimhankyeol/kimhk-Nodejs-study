//https

const https = require('https');
const fs = require('fs');

https.createServer({
    cert : fs.reqdFileSync('도메인 인증서 경로'),
    key : fs.readFileSync('도메인 비밀키 경로'),
    ca : [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로')
    ],
},(req,res)=>{
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server</p>');
}).listen(443,()=>{
    console.log('443번 포트에서 서버 대기중입니다.')
});
/*
http와 거의 비슷하지만  createServer 메서드가 인자를 두개 받음
두번쨰 인자는 http 모듈과 같이 서버로직이고 첫번째 인자는 인증서에 관련된 옵션객체임 
인증서를 구입하면 pem 이나 crt , key확장자를 가진 파일들을 제공해줌
fs.readFileSync  메서드로 읽어서 cert , key , ca 옵션에 알맞게 넣어주면 됨

노드의 http2 노듈은 SSL 암호화와 더불어 최신 HTTP프로토콜인 http/2 를 사용할수 있게해줌
http/2 는 요청 응답방식이 기존 http/1.1 보다 개선되어 훨씬 효율적으로 요청을 보냄
http/2를 사용하면 웹의 속도도 많이 개선됨

http2 의 적용 예제는 server1-2.js 참조
*/