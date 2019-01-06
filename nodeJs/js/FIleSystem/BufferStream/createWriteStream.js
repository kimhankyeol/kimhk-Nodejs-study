const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish',()=>{
    console.log('파일쓰기 완료');
});

writeStream.write('이 글을 씁니다\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

/*
먼저 createWriteStream() 으로 쓰기 스트림을 만들어 줍니다. 
첫번째 인자로는 출력 파일명을 입력함
두번째 인자는 옵션인데 여기서는 사용하지 않겠음

finish 이벤트 리스너 도 붙여줌 . 파일쓰기가 종료되면 콜백함수 호출됨

writeStream에서 제공하는 write()메서드로 넣을 데이터를 씀 여러번 호출할 수 있음
데이터를 다 썻다면 end()메서드로 종료를 알려줌 
이떄 finish 이벤트 발생

*/