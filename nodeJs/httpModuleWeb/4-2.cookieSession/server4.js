/* 
코드가 조금 복잡해졌음
주소가 /login 과  / 로 시작하는것까지 2개이기 떄문에 주소별로 분기 처리를함
1. 주소가 /login 으로 시작할 경우에는 url 과 querystring 모듈로 각각 주소와 주소에 딸려오는 query를 분석함
그리고 키의 만료 시간도 지금으로부터 5분뒤로 설정함 .
이제 302 응답 코드 , 리다이렉트 주소와 함께 쿠키를 헤더에 넣습니다. 
브라우저는 이 응답코드를 보고 페이지를 해당 주소로 리다이렉트함 
헤더에는 한글을 설정할수 없으므로 name변수에 encodeURIComponent 메서드로 인코딩함

2.그 외의 경우(/로 접속했을떄 ), 먼저 쿠키가 있는지 없는지를 확인합니다.
쿠키가 없다면 로그인을 할수 있는 페이지를 보냄 
처음 방문한 경우엔 쿠키가 없으므로 server4.html이 전송됨
쿠키가 있다면 로그인한 상태로 간주하여 인사말을 보냄 
res.end메서드에 한글이 들어가면 인코딩 문제가 발생하므로 
res.writeHead에 Content-Type 을 text/html; charset=utf-8로 설정해 인코딩을 명시함

쿠키를 설정할떄 만료시간 (Expires)과 HttpOnly,Path 같은 옵션을 부여함 
쿠키는 설정할 떄 각종 옵션을 넣을수 있음 
옵션간에는 ; 으로 구분하면됨


세션은 http https 유지 안될 수 있엇허 

쿠키를 사용하는게 좋음
*/


const http = require('http');
const fs = require('fs');
const url = require('url');
const qs =require('querystring');

const parseCookies = (cookie='') =>
    cookie
        .split(';')
        .map(v=>v.split('='))
        .map(([k,...vs]) => [k,vs.join('=')])
        .reduce((acc,[k,v])=>{
            acc[k.trim()]=decodeURIComponent(v);
            return acc;
        },{});


http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie);

    console.log(cookies);

   
    //////////////////////////////////////////////////////1번의 경우
    // /login으로 요청이 시작될 경우  url 과 querystring 모듈로 각각 주소와 주소에 딸려오는 query를 분석함
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        console.log({name});
        const {password} = qs.parse(query);
        console.log({password});
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);

        //쿠키명 = 쿠키값  기본적인 쿠키의 값임 mycookie=test 또는 name = zerocho 같이 설정함
        //Expires=날짜  만료기한임 . 이 기한이 지나면 쿠키가 제거됨 . 기본값은 클라이언트가 종료될때 까지임
        //Max-age=초 Expires 와 비슷하지만 날짜 대신 초를 넣을수 있음. 해당 초가 지나면 쿠키가 제거됨
        //Domain=도메인명  . 쿠키가 전송될 도메인을 특정할수 있음 기본값은 현재 도메인임
        //Path=URL 쿠키가 전송될 URL 을 특정할수 있음 . 기본값은 / 이고 이 경우 모든 URL 에서 쿠키를 전송할 수 있음
        //Secure : HTTPS 일 경우에만 쿠키가 전송됨
        //HttpOnly 설정시 자바스크립트에서 쿠키에 접근할 수 없습니다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋음
        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':[`name=${encodeURIComponent(name)};Expires=${expires.toGMTString()};HttpOnly;Path=/`,`password=${encodeURIComponent(password)};Expires=${expires.toGMTString()};HttpOnly;Path=/`]
        });

        res.end();
        /////////////////////////////////////////////////2번의 경우
    }else if(cookies.name&&cookies.password){
        console.log("cookies 확인:"+cookies.password);
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`${cookies.password} 임`)
        res.end(`${cookies.name} 님 안녕하세요`);
    }else{
        fs.readFile('./server4.html',(err,data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
}).listen(8083,()=>{
    console.log('8083번 포트에서 대기중입니다.');
});

/*
원하는 대로 동작하기는 하지만 이 방식은 상당히 위험함
현재 Application 탭에서 보이는 것처럼 쿠키가 노출되어 있음 
또한 쿠키가 조작될 위험도 있음
따라서 이름같은 민감한 개인정보를 쿠키에 넣어두는 것은 적절하지 못합니다.

다음과 같이 코드 변경 server5.js 참조
*/