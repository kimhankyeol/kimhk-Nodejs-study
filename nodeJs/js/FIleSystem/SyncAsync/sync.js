const fs =require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번',data.toString());
console.log('끝');

//readFile()대신 readFileSync()라는 메서드를 사용
//그런데 콜백함수를 넣는 대신 직접 return 값을 받아옴
//그 값을 다음 줄부터 바로 사용할 수 있음

//콘솔에 순서대로 찍힘 . 코드는 훨씬 이해하기 쉽지만 치명적인 단점이 있음
/*
readFileSync  메서드를 사용하면 요청이 수백개 이상 들어왔을때 성능에 문제가 생김
Sync 메서드를 사용 할때는 이전 작업이 완료되어야 다음 작업 할수 있음
즉 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못하고 대기 하고 있어야함
메인 스레드가 일을 하지 않고 노는 시간이 생기기 때문에 비효율적임 
비동기 메서드는 백그라운드가 작업을 하는 와중에도 다음작업을 처리할수 있었음

동기메서드들은 이름뒤에 Sync가 붙어 있어 구분하기 쉬움 writeFileSync도 있음
하지만 동기 메서드를 사용해야 하는 경우는 극히 드물다 .
비동기 메서드가 훨씬 더 효율적임 
앞으로 진행되는 예제에서도 동기 메서드를 더 이상 사용하지 않을것임
비동기 방식으로 하되 순서를 유지하고 싶다면 어떻게 해야될까 ?
asyncOrder.js 참조
*/