/*
비동기 방식으로 하되 순서를 유지하고 싶다면 어떻게 해야될까 ?
*/
const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
    
    fs.readFile('./readme2.txt',(err,date)=>{
        if(err){
            throw err;
        }
        console.log('1번',data.toString());

        fs.readFile('./readme2.txt',(err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번',data.toString());
        });
    });
});
console.log('끝');

/*
지금까지 동기 메서드와 비동기 메서드의 차이를 알아봤음
이제 readFile과 readFileSync()에서 받아온 data를 data.toString()으로 변환하는 이유를 알아볼 차례임
결론부터 말하자면 , toString메서드를 사용하는 이유는 data 가 버퍼이기 때문임
다음은 버퍼에 대해서 공부 
*/