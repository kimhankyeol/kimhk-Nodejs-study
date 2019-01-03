//global객체 
//브라우저의 window 같은 전역 객체 
//전역객체이므로 모든 파일 접근가능
//또한 window.open 메서드를 그냥 open으로 호출할 수 있는 것 처럼 global도 생략할 수 ㅣㅇㅆ음
//require 함수에서도 global,require 에서 global 생략된것
//노드 콘솔에 로그를 기록하는 console 객체도 원래는 global.console 
//global 객체 내부에는 많은 속성이 들어 있음
//내부를 보려면 REPL을 이용해야함
//global 객체안에는 수십가지 속성이 담겨 있지만 필요한 것 만 공부할것


//전역객체라는 점을 이용하여 간단한 데이터를 파일끼리 공유할때 사용함
//globalA.js, globalB.js 를 생성해보겠음

module.exports = () => global.message;