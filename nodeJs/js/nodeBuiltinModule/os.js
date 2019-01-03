const os =require('os');

console.log('운영체제 정보');

console.log('운영체제 정보');
console.log('os.arch():',os.arch());
console.log('os.platform():',os.platform());
console.log('os.type():',os.type());
console.log('os.uptime():',os.uptime());
console.log('os.hostname():',os.hostname());
console.log('os.release():',os.release());

console.log('경로```````````````````````````````````````');
console.log('os.homedir():',os.homedir());
console.log('os.tmpdir():',os.tmpdir());

console.log('cpu정보------------------------------');
console.log('os.cpus():',os.cpus());
console.log('os.cpus().length:',os.cpus().length);

console.log('메모리 정보------------------------------');
console.log('os.freemem:',os.freemem());
console.log('os.totalmem:',os.totalmem());


//os.arch() process.arch 동일
//os.platform() process.platform 동일
//os.type() 운영체제의 종류를 보여줌
//os.uptime() 운영체제 부팅이후 흐른시간 process.uptime() 노드의 실행시간
//os.hostname() 컴퓨터의 이름
//os.release() 운영체제 버전
//os.homedir() 홈디렉터리 경로
//os.tmpdir() 임시파일 저장 경로
//os.cpus() 컴퓨터의 코어정보
//os.freemem() 사용 가능한 메모리 보여줌
//os.totalmem() 전체 메모리 용량 보여줌
//os.constants() 각종에러와 신호에 대한 정보