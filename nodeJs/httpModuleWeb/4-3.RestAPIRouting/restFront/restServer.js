const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
       ////////////////////////////////////////////////////1번
    //GET 메서드에서 /,/about 요청 주소는 페이지를 요청하는 것이므로 HTML 파일을 읽어서 전송함
    //AJAX 요청을 처리하는 /users에서는 users 데이터를 전송함 
    //JSON형식으로 보내기 위해 JSON.stringify를 해주었음 
    //그 외에 GET요청은 CSS나 JS파일을 요청하는 것이므로 찾아서 보내주고 없다면 404 오류 뜸
  if (req.method === 'GET') {
    if (req.url === '/') {
      return fs.readFile('./restFront.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/about') {
      return fs.readFile('./about.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/users') {
      return res.end(JSON.stringify(users));
    }
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
     //////////////////////////////////////////////////////////////  2번
    //POST 와 PUT 메서드 는 클라이언트로 부터 데이터를 받으므로 특별한 처리가 필요함
    //req.on('data',콜백) 과 req.on('end',콜백) 부분 임 
    //버퍼와 스트림에서 배웠던 readStream 임 
    //readStream으로 요청과 같이 들어오는 요청 본문을 받을수 있습니다. 
    //단 문자열이므로 JSON으로 만드는 JSON.parse과정이 한번 필요함
  } else if (req.method === 'POST') {
    if (req.url === '/users') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = +new Date();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        return res.end(JSON.stringify(users));
      });
    }
    ///////////////////////////////////////////////////3번
    //DELETE 메서드로 요청이 오면 주소에 들어있는  키에 해당하는 사용자를 제거함 
  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      delete users[key];
      return res.end(JSON.stringify(users));
    }
  }
    ///////////////////////////////////////////////////////////4번 
    //해당하는 주소가 없을경우 404 NOT FOUND에러를 응답함
  res.writeHead(404, 'NOT FOUND');
  return res.end('NOT FOUND');
})
  .listen(8085, () => {
    console.log('8085번 포트에서 서버 대기중입니다');
  });

          
     
        
  
/*
요청이 어떤 메서드를 사용했는지 req.method로 알수 있음
따라서 req.method를 기준으로 if문을 분기 처리하였음


*/