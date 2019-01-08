/*
쿠키는 요청과 응답의 헤더에 저장됨 
요청과 응답은 각각 헤더와 본문을 가짐 

이제 서버에서 직접 쿠키를 만들어 요청자의 부라우저에 넣어보겠음
*/

const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v=>v.split('='))
        .map(([k,...vs]) => [k,vs.join('=')])
        .reduce((acc,[k,v])=>{
            acc[k.trim()]=decodeURIComponent(v);
            return acc;
        },{});

http.createServer((req,res)=>{
    const cookies =parseCookies(req.headers.cookie);
    console.log(req.url,cookies);
    res.writeHead(200,{'Set-Cookie':'mycookie=test'});
    res.end('Hello Cookie');
}).listen(8082,()=>{
    console.log('8082번 포트에서 대기중입니다.')
});

/*
parseCookie라는 함수를 직접 만들어 보았음 
쿠키는 name=zerocho; year=1994 처럼 문자열 형식으로 오므로 이를 {name:'zerocho',year:'1994'}와 같이 객체로 바꾸는 함수임

createServer 메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석함
쿠키는 req.headers.cookie에 들어 있음 
req.headers는 요청의 헤더를 의미함
좀 전에 쿠키는 요청과 응답의 헤더를 통해 오고감

응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead 메서드를 사용함
첫번쨰인자로 200이라는 상태코드를 넣었음
200은 성공이라는 의미임 
두번째 인자로는 헤더의 내용을 입력함
Set-Cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미임
실제로 응답을 받은 브라우저는 mycookie=test 라는 쿠키를 저장함
*/
/*
요청은 분명 한 번만 보냈는데 2개가 기록됨 
./favicon.ico 는 요청한 적이 없는데 
첫번쨰 요청('/') 에서는 쿠키에 대한 정보가 없다고 나오고 , 두번째 요청('/favicon.ico')에서는 {mycookie:'test'} 가 기록됨
favicon 이란 다음과 같이 웹사이트 탭에 보이는 이미지를 뜻함 
브라우저는 파비콘이 뭔지 HTML에서 유추할수 없고 서버에 파비콘 정보에 대한 요청을 보냄
현재 예제에서 HTML에 파비콘에 대한 정보를 넣어두지 않았으므로 브라우저가 추가로 favicon.ico를 요청한것

요청 2개를 통해 우리는 서버가 제대로 쿠키를 심어 주었음을 확인 
첫번쨰 요청(/)을 보내기 전에는 브라우저가 어떠한 쿠키 정보도 가지고 있지 않음

서버는 응답의 헤더에 mycookie=test라는 쿠키를 심으라고 브라우저에게 명령
따라서 브라우저는 쿠키를 심었고 두번째 (/favicon.ico)의 헤더에 쿠키가 들어있음을 확인 할수 있음


*/