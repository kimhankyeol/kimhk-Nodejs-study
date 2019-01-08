const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '')=>
    cookie
        .split(';')
        .map(v=>v.split('='))
        .map(([k,...vs])=>[k,vs.join('=')])
        .reduce((acc,[k,v])=>{
            acc[k.trim()]=decodeURIComponent(v);
            return acc;
        });

        const session = {};
        
http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        console.log({name});
       
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5); 
        const randomInt = +new Date();
        session[randomInt] = {
            name,
            expires
        };
        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':`session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly;Path=/`
        });
        res.end();
    }else if(cookies.session && session[cookies.session].expires>new Date()){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    }else{
        fs.readFile('./server4.html',(err,data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
}).listen(8084,()=>{
    console.log('8084번 포트에서 서버 대기중입니다.')
});

/*
server4.js 와는 살짝 달라진 부분이 있음
쿠키에 이름을 담아서 보내는 대신 , randomInt 라는 임의의 숫자를 보냄
사용자의 이름과 만료 시간은 session 이라는 객체에 대신 저장

cookie.session 이 만료기한을 넘기지 않았다면 session 변수에서 사용자 정보를 가져와서 사용함


이 방식이 세션임.
서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통합니다.
세션아이디는 쿠키를 사용해서 주고받지 않아도 됨
하지만 많은 웹사이트가 쿠키를 사용함 
쿠키를 사용하는 방법이 제일 간단하기 때문임
이 책에서도 쿠키를 세션 아이디로 사용하는 방식을 실습을 진행할것임

물론 실제 배포용서버에서는 세션을 위와같이 변수에 저장하지 않음 
서버가 멈추거나 재시작 되면 메모리에 저장된 변수가 초기화 되기 떄문임
서버의 메모리가 부족하면 세션을 저장하지 못하는 문제도 생김 
그래서 보통은 데이터베이스에 넣어둠
서비스를 새로 만들때 마다 쿠키와 세션을 직접 구현할수는 없음 . 게다가 지금 코드로는 쿠키를 악용한 여러가지 위협을 방어하지도 못함 
위의 방식 역시 세션아이디 값이 공개되어 있어 누출되면 다른사람이 사용할 수 있음
 개념을 설명하기 위한 코드임 보안상 매우 취약

 다른 사람들이 만든 검증된 코드를 사용하는 것이 좋음
 다른 사람의 코드(모듈)를 사용하는 방법은 5장에서 배움 
 6장에서 세션을 처리하는 모듈을 사용해 제대로 된 세션 기능을 도입해보겠음

 이제 쿠키와 세션까지 구현해봄 
 아직까지는 페이지가 하나밖에 없어 조금 허전함 다른 페이지를 만들어보면서 라우팅의 개념에 대해 알아보겠음
 */