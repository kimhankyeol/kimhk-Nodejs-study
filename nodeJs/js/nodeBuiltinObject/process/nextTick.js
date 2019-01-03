setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});
setTimeout(()=>{
    console.log('timeout');
},0)

Promise.resolve().then(()=>console.log('promise')); //성공하면 promise 콘솔창에 뜸

/*
process.nextTick은 setImmediate나 setTimeout보다 먼저 실행됨 
코드 맨밑에 Promise를 넣은것은 resolve된 Promise도 nextTick 처럼 다른 콜백들보다 우선시 되기 떄문!!!
그래서 process.nextTick 과 Promise를 마이크로 태스크라고 따로 구분지어부름
콘솔
nextTick
promise
timeout
immediate

동작 순서
1.process.nextTick  
2.Promise
3.setTimeout(콜백,0)
4.setImmediate

마이크로 태스크의 재귀 호출
process.nextTick 으로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백함수보다도 먼저 실행됨
그래서 비동기 처리를 할떄 setImmediate 보다 process.nextTick을 선호하는 개발자도 있음
하지만 이런 마이크로 태스크를 재귀호출하게 되면 이벤트 루프는 다른 콜백함수보다 마이크로 태스크를 우선하여 처리하므로 콜백함수들이 실행되지 않을 수 도 있음


*/
