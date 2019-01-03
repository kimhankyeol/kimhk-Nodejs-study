//타이머 기능을 제공하는 함수인 setTimeout setInterval,setImmdiate는 노드에서 window 대신 global 객체 안에 들어 있음

const timeout =setTimeout(()=>{
    console.log('1.5초후 실행');
},1500);

const interval = setInterval(()=>{
    console.log('1초마다 실행');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.')
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const immediate =  setImmediate(()=>{
    console.log('즉시 실행')
});
const immediate2 =  setImmediate(()=>{
    console.log('실행 되지 않습니다.');
});

clearImmediate(immediate2);

//제일 먼저 실행 되는거 immediate 임 
//immediate2 는 바로 clearImmediate를 사용해서 취소했기 떄문에 실행되지 않고 
//코드 실행 1초 후에는 interval의 콜백이 실행됨
//코드실행 1.5초후에는 timeout의 콜백이 실행됨
//interval의 콜백은 1초마다 실행되므로 코드실행 후 2초가 지났을떄도 콜백이 실행됨
//2.5초가 지났을떄 clearTimeout과 clearInterval 이 각각 timeout2와 interval을 취소함 
//따라서 코드실행 3초후에는 로그가 남아있지 않음


/*
setImmdiate(콜백)  과 setTimeout(콜백,0)

setImmdiate(콜백) 과 setTimeout(콜백,0)에 담긴 콜백함수는 이벤트 루프를 거친 뒤 즉시 실행됨
차이점은 특수한경우에 setImmediate는 setTimeout(콜백,0)보다 먼저 실행됨 .
파일시스템접근, 네트워크 같은 I/O 작업에 콜백함수안에서 타이머를 호출하는 경우임
하지만 setImmdiate가 항상 setTimeout(콜백,0)보다 먼저 호출되는것은 아님 
헷갈리지 않도록 setTimeout(콜백,0) 사용하지 않는것을 권장함


*/