/*
스트림을 배울 떄 on('data',콜백) 또는 on('end',콜백) 을 사용함 
바로 data라는 이벤트와 end라는 이벤트가 발생할떄 콜백함수를 호출하도록 이벤트를 등록한것임
createReadStream()같은 경우에는 내부적으로 알아서 data와 end 이벤트를 호출하지만 우리가 직접 이벤트를 만들수도 있음
다음 예제를 통해 이벤트를 만들고 호출하고 삭제해보겠음
*/
/*
events 모듈을 사용하면됨
myEvent라는 객체를 먼저 만듬 
객체는 이벤트관리를 위한 메서드를 가지고 있음
*/
const EventEmitter =require('events');

const myEvent = new EventEmitter();
//addListener(이벤트명, 콜백) on 과 기능이 같음
myEvent.addListener('event1',()=>{
    console.log('이벤트 1');
});

//on(이벤트명 ,콜백)  이벤트 이름과 이벤트 발생시에 콜백을 연결해줌 . 이렇게 연결하는 동작을 이벤트 리스닝이라고 부름 . event2 처럼 이벤트 하나에 이벤트 여러개 달아줄수도 있음
myEvent.on('event2',()=>{
    console.log('이벤트 2');
});
myEvent.on('event2',()=>{
    console.log('이벤트 2 추가');
});

//emit(이벤트명) 이벤트를 호출하는 메서드임 . 이벤트 이름을 인자로 넣어주면 미리 등록해뒀던 이벤트 콜백이 실행됨
myEvent.emit('event1');
myEvent.emit('event2');

//once(이벤트명,콜백) 한번만 실행되는 이벤트임 . myEvent.emit('event3')을 두번 연속 호출했지만 콜백이 한번만 실행됨
myEvent.once('event3',()=>{
    console.log('이벤트 3');
});

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4',()=>{
    console.log('이벤트 4');
});

//removeAllListeners(이벤트명) 이벤트에 연결된 모든 이벤트 리스너를 제거함 event 3 ,4 가 호출되기전에 리스너를 제거했으므로 콜백이 실행 되지 않음
myEvent.removeAllListeners('event4');
myEvent.emit('event3');
myEvent.emit('event4');

const listner = () =>{
    console.log('이벤트 5');
};

//removeListener(이벤트명,리스너) : 이벤트에 연결된 리스너를 하나씩 제거합니다  event5 콜백 실행 되지않음
//off(이벤트명,콜백) 노드 10버전에서 추가된 메서드로 removeListener와 기능이 같음
myEvent.on('event5',listner);
myEvent.removeListener('event5',listner);
myEvent.emit('event5');

//listenerCount(이벤트명) 현재 리스너가 몇개 연결되어 있는지 확인
console.log(myEvent.listenerCount('event2'));
