//자바스크립트 보조함수
//helper Function
//m이상 n이하의 무작위 정수를 반환;
function rand(m,n){
    return m+Math.floor((n-m+1)*Math.random());
}
function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"]
        [rand(0,5)]
}
//0~5까지의 랜덤숫자를 rand 에서 꺼내고
//[] 배열의  몇번째인지를 rand 에서 결정

////////////////////////////////////////////

//do while 최소 한번은 실행 할떄  
//while 루프의 조건이 거짓같은 값으로 시작하면 루프 바디는 한번도 실행되지 않음
let remaining =totalBet;
do{
    let bet = rand(1,remaining);
    let face = randFace();
    bets[face]=bets[face] + bet;
    remaining = remaining - bet;
}while(remaining>0);

//for 루프 
const hand=[];
for (let rol1=0;ro1<3;rol1++){
    hand.push(randFace())
}