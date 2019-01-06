/*
readFile() 방식의 버퍼가 편리하기는 하지만 문제점도 있음 
만약 용량이 100MB인 파일이 있으면 읽을 때 메모리의 100MB 버퍼를 만들어야 한다 .
이 작업이 동시에 열 개만 해도 1GB 에 달하는 메모리가 사용됨 
특히 서버 같이 몇명이 이용할 지 모르는 환경에서 메모리 문제가 발생할 수 있음
또한 모든 내용을 버퍼에 다 쓴후에야 다음 동작으로 넘어가므로 파일 읽기 압축 파일쓰기 등의 조작을 연달아 할때 매번 전체 용량을 버퍼로 처리해야 다음 단계로 넘어갈수 있음

그래서 버퍼의 크기를 작게 만들어서 여러번에 나눠서 보내는 방식이 등장함
예를 들면 버퍼 1MB를 만든후  100MB파일을 백번에 걸쳐 보내는것 
메모리 1MB 로 100MB파일을 전송할 수 있음
이를 편리하게 만든것이 스트림

*/

//파일을 읽는 스트림 메서드로 createReadStream

const fs =require('fs');
const readStream = fs.createReadStream('./readme3.txt',{highWaterMark:16});
const data=[];

readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data:',chunk,chunk.length);
});

readStream.on('end',()=>{
    console.log('end:',Buffer.concat(data).toString());
});

readStream.on('error',(err)=>{
    console.log('error:',err);
})

/*
1.createReadStream() 으로 읽기 스트림을 만들어줌
    첫번쨰 인자로 읽을 파일경로를 넣음
    두번쨰 인자는 옵션 객체인데 , highWaterMark 라는 옵션이 버퍼의 크기 (바이트 단위)를 정할 수 있는 옵션임
    기본값을 64KB이지만 여러번 나눠서 보내는 모습을 보여주기 위해 16B로 낮췄음
2.readStream은 이벤트 리스너를 붙여서 사용 
    보통 data , end, error 이벤트를 사용함
    위 예제의 readStream.on('data') 같이 이벤트 리스너를 붙이면 됨
    파일을 읽는 도중에러가 발생하면 error 이벤트가 호출되고 , 파일읽기가 시작되면 data , 16B씩 읽도록 설정했으므로 파일의 크기가 16B보다 크다면 여러번 발생 할 수 있음
    파일을 다 읽으면 end 이벤트가 발생함

예제에서는 미리 data 배열을 만들어놓고 들어오는 chunk들을 하나씩 push 한뒤 마지막에 Buffer.concat()으로 합쳐서 다시 문자열을 만듬

파일의 크기가 99B라 무려 7번에 걸쳐 데이터를 전송 
하지만 기본값으로는 64KB씩 전송하므로 대부분의 txt파일을 한번에 전송됨
*/