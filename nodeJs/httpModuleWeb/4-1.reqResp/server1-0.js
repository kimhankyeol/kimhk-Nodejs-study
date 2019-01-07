/*
createServer 메서드 뒤에 listen 메서드를 붙이고 클라이언트에게 공개할 포트번호와 포트 연결 완료후 실행될 콜백 함수를 넣어줌 
이제 이 파일을 실행하면 서버는 8080포트에서 요청이 오기를 대기함
listen메서드에 콜백함수를 넣는 대신 
listening 이벤트 리스너를 붙여도 됨
추가로 error 이벤트 리스너도 붙여보았음
*/

const http =require('http');

const server = http.createServer((req,res)=>{
    //res 객체에는 res.write 와 res.end 메서드가 있음 
    //res.write의 첫번째 인자는 클라이언트로 보낼 데이터 임
    //지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보낼수도 있음
    //또한 여러번 호출해서 데이터를 여러개 보내도 됨
    res.write('<h1>Hello Node!</h1>');

    //res.end 에서 <p>Hello Server!</p> 문자열을 한번 클라이언트로 보낸후 응답이 종료된것임
    res.end('<p>Hello Server!</p>');

    //브라우저는 응답내용을 받아서 렌더링함
});

server.listen(8080);
server.on('listening',()=>{
    console.log('8080번 포트에서 대기중입니다!');
});
server.on('error',(error)=>{
    console.log(error);
});
//실행하려면 브라우저 상단에 http://localhost:8080/ 입력
/*
localhost 와 port 란 

localhost는 현재 컴퓨터의 내부주소를 가리킴. 외부에서는 접근할수 없고 자신의 컴퓨터에서만 접근할수 있음
따라서 서버개발시 테스트용으로 많이 사용됨

포트는 서버내에서 프로세스를 구분하는 번호 
서버는 HTTP요청을 대기하는것외에도 다양한 작업을 함 
데이터베이스와도 통신을하고 FTP 요청을 처리하기도함 
따라서 서버는 프로세스에 포트를 다르게 할당하여 들어오는 요청을 구분함
FTP 21 http 80 https 443 mysql 3306

이제 웹서버가 만들어 졌으니 페이지를 몇개 더 만들어볼거임 
그 전에 HTML파일을 만들어주는게 좋음 
server2.html 참조

*/