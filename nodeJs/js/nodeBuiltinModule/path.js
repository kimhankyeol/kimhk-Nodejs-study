//폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈입니다.
//path 모듈이 필요한 이유중하나는 운영체제별로 경로 구분자가 다르기 때문 
//크게 Windows 타입과 POSIX타입으로 구분됨
//POSIX는 유닉스 기반의 운영체제들로 macOS와 리눅스가 속해 있습니다.
//Windows  C:\Users
//POSIX  /home/zerocho

const path = require('path');

const string = __filename;
//파일 경로의 구분자  Windows 는 \ POSIX /
console.log('path.sep',path.sep);

//환경변수의 구분자 process.env.PATH 를 입력하면 여러개의 경로가 이 구분자로 되 어있음  Windows  ;  POSIX :
console.log('path.delimiter:',path.delimiter);
console.log('------------------------------------');

//파일이 위치한 폴더 경로를 보여줌
console.log('path.dirname():',path.dirname(string));

//파일의 확장자를 보여줌
console.log('path.extname():',path.extname(string));

//파일의 이름 (확장자 포함을 보여줌 ) 파일의 이름만 표시 하고 싶으면 basename 두번째 인자로 파일의 확장자를 넣어주면됨
console.log('path.basename():',path.basename(string));
console.log('path.basename():',path.basename(string,path.extname(string)));
console.log('-------------------------------------');

//파일경로를 root dir base ext name 으로 분리함
console.log('path.parse():',path.parse(string));

//path.parse()한 객체를 파일정도로 합침
console.log('path.format():',path.format({
    dir : 'c:\\path\\nodeBuiltinModule',
    name:'path',
    ext:'.js'
}));

//   \  나 / 를 실수로 여러번 사용하거나 혼용했을때 정상적인 경로로 변환해줌
console.log('path.normalize():',path.normalize('C://kimhk-Nodejs-study\\nodeJs\\js\\nodeBuiltinModule\\path.js'));

//파일의 경로가 절대경로인지 상대경로인지 true 나 false 로 알려줌
console.log('path.isAbsolute():',path.isAbsolute('c:\\'));
console.log('path.isAbsolute():',path.isAbsolute('./nodeBuiltinModule/path.js'));
console.log('------------------------------------');

//경로를  두개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log('path.relative:',path.relative('C:\\kimhk-Nodejs-study\\nodeJs\\js\\nodeBuiltinModule\\path.js','c:\\'));

//여러 인자를 넣으면 하나의 경로로 합쳐줍니다.
console.log('path.join():',path.join(__dirname,'..','..','/users','.','/nodeBuiltinModule'));

//path.join() 과 비슷하지만 차이가 있음 
console.log('path.resolve():',path.resolve(__dirname,'..','users','.','/nodeBuiltinModule'));
console.log('------------------------------------');

//path.join() 과 path.resolve() 의 차이 
/*
동작 방식이 다르다
path.resolve 는 / 를 만나면 절대경로로 인식해서 앞의 경로를 무시하고 , path.join 은 상대경로로 처리함 
path.join(): C:\kimhk-Nodejs-study\nodeJs\users\nodeBuiltinModule
path.resolve(): C:\nodeBuiltinModule
*/
/*
상대 경로 와 절대 경로

절대경로는 루트 폴더 Windows C:\ 나 POSIX의 /) 노드 프로세스가 실행되는 위치가 기준이 됩니다.
상대경로는 현재파일이 기준이 됨 현재파일과 같은 경로면 점하나 (.) , 현재파일보다 한단계 상위 경로 면 점 두개 (..)
*/

/* 
Windows 에서 POSIX 스타일 path 를 사용할떄 있고 그반대도 있음 
이러한 경우 Windows 에서는 path.posix.sep 이나 path.posix.join() 같이 사용하면 되고, POSIX에서는 path.win32.sep 이나 path.win32.join() 같이 사용하면됨
*/

//path 모듈은 앞으로 노드 프로그래밍을 하면서 매우 자주 쓰게될 모듈중 하나임