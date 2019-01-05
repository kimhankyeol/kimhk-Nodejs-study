const fs =require('fs');

console.log('시작');
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
});
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2번',data.toString());
});
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3번',data.toString());
});
console.log('끝');
//같은 파일을 세번 읽었음 . 어떤 순서로 출력되는지 확인  시작 - 끝 - 뒤순서는 랜덤
/*
비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감
따라서 파일 익기 요청만 세 번을 보내고 console.log('끝') 을 찍음
나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림을 줍니다.
메인 스레드는 그제서야 등록된 콜백 함수를 실행
이 방식은 상당히 좋음 
수백개의 I/O 요청이 들어와도 메인스레드는 백그라운드에 요청 처리를 위임함 
그 후로도 얼마든지 요청을 받을수 있음
나중에 백그라운드가 각각의 요청 처리가 완료되었다고 알리면 그때 콜백함수를 처리하면됨
*/