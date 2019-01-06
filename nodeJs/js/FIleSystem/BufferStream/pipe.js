/*
createReadStream으로 파일을 읽고 그 스트림을 전달 받아 createWriteStream으로 파일을 쓸 수 있음
파일복사와 비슷함
스트림끼리 연결하는 것을 파이핑한다고 표현함
액체가 흐르는관 파이프 처럼 흐른다고 해서 지어진 이름

*/

const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);

/*
readme4.txt 와 똑같은 내용의 writeme3.txt 가 생성되었을 것임
미리 읽기 스트림과 쓰기 스트림을 만들어 둔후 두개의 스트림 사이를 pipe 메서드로 연결해주면 저절로 데이터가 writeStream으로 넘어감
따로 on('data')나 writeStream.write()를 하지 않아도 알아서 전달되므로 편리함
노드 8.5버전이 나오기 전까지는 이 방식으로 파일을 복사하고 했음
새로운 파일 복사 방식은 기타 fs 메서드 쪽에서 나옴

pipe는 스트림 사이에 연결할수 있음 . gzip.js 참조
*/