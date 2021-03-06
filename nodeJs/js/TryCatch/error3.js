/*
process 객체에 uncaughtException 이벤트 리스너를 달아 주었음
처리하지 못한 에러가 발생 했을떄 이벤트 리스너가 실행되고 프로세스가 유지됨
이 부분이 없다면 위의 예제에서는 setTimeout이 실행되지 않았을것임
실행후 1초만에 setInterval에서 에러가 발생하여 프로세스가 멈추기 때문임
하지만 uncaughtException 이벤트 리스너가 연결되어 있으므로 프로세스가 멈추지 않음
*/


process.on('uncaughtException',(err)=>{
    console.error('예기치 못한 에러',err);
});

setInterval(()=>{
throw new Error('서버를 고장 내 주마');
},1000);

setTimeout(()=>{
console.log('실행됨')
},2000);


/*
 try catch로 처리하지 못한 에러가 발생했지만 setInterval만 멈췄을뿐 나머지 코드는 제대로 실행됨
어떻게 보면 uncaughtException이벤트 리스너로 모든 에러를 처리할 수 있을 것 같이 보입니다.
실제로 콜백 함수에 에러 발생시 복구작업을 하는 코드를 넣어둔 사람을 볼수도 있음

하지만 노드 공식문서에서는 uncaughtException 이벤트를 최후의 수단으로 사용하라고 말하고 있음
노드는 uncaughtException이벤트 발생후 다음 동작이 제대로 동작하는지를 보증하지 않음
즉 복구 작업 코드를 넣어두었더라도 그것이 동작하는지 확신할 수 없음

따라서 단순히 에러내용을 기록하는 정도로 사용하고 process.exit() 로 프로세스를 종료하는것이 좋음
프로세스를 종료하면 서버가 멈춰서 걱정되지만 운영중인 서버에서 프로세스가 종료되었을때 재시작하는 법은 뒤에서 알아볼것임

서버운영은 에러와의 싸움 
모든 에러 상황에 대비하는것이 최선이지만 시간이나 비용 인력등의 제약으로 미처 대비하지 못한 에러가 있을수 있음
따라서 에러발생시 철저히 기록 (로깅)하는 습관을 들이고 주기적으로 로그를 확인하면서 보완해 나가야함

*/
