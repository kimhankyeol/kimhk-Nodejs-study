//m이상 n이하 무작위 정수 반환
function rand(m,n){
    return m+Math.floor((n-m+1)*Math.random());
    //Math.floor((n-m+1)*Math.random());  Math.random 0< <1 난수를 꺼냄
 }

//크라운 앵커 게임의 여섯 그림 중 하나의 해당되는 문자열을 무작위 반환
function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"]
        [rand(0,5)]
}
//0~5까지의 랜덤숫자를 rand 에서 꺼내고
//[] 배열의  몇번째인지를 rand 에서 결정

let funds = 50; //시작조건
let round = 0;
while(funds>1&&funds<100){
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds : ${funds}\p`);
    //돈을 겁니다
    let bets={crown:0,anchor:0,heart:0,spade:0,club:0,diamond:0};
    let totalBet = rand(1,funds);
    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    }else{
        //판돈을 나눕니다.
        let remaining = totalBet;
        do{
            let bet = rand(1,remaining);
            let face = randFace();
            bets[face]=bets[face]+bet;
            remaining=remaining-bet;
        }while(remaining>0)
    }
    funds = funds -totalBet;
console.log('\tbets:'+
    Object.keys(bets).map(face=>`${face} : ${bets[face]} pence`).join(',')+
    `(total:${totalBet} pence)`);
    //key값 크라운 앵커 하트 등등  , 기준으로 나눠서 값을 뽑는다는거같음

//주사위 굴림
const hand=[];
for(let rol1=0;rol1<3;rol1++){
    hand.push(randFace());//아무거나 3개를 뽑음
}

console.log(`\thand:${hand.join(',')}`);

//딴돈을 가져옵니다
let winnings = 0;
for(let die=0; die<hand.length;die++){
    let face= hand[die];
    if(bets[face]>0) winnings =winnings+bets[face];
}
funds =funds + winnings;
console.log(`\twinnings:${winnings}`);
}
console.log(`\tending funds:${funds}`);
