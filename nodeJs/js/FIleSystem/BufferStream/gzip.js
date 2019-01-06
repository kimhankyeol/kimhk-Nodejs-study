//다음 코드는 파일을 읽은후 gzip방식으로 압축하는 코드임

const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream =fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

/*
노드에서는 파일을 압축하는 zlib 이라는 모듈도 제공  .
공부하면서 많이 사용하지 않으므로 따로 설명하지않음
다만 zlib 의 createGzip()이라는 메서드가 스트림을 지원하므로 readStream 과 writeStream중간에서 파이핑 할수 있음
버퍼 데이터가 전달되다가 gzip 압축을 거친후 파일로 쓰여짐

*/