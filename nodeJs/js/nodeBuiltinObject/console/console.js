const string ='abc';
const number =1;
const boolean=true;
const obj ={
    outside:{
        inside:{
            key:'value'
        }
    }
};

console.time('전체시간');
console.log('평범한 로그');
console.log(string,number,boolean);
console.error('에러메시지');

console.dir(obj,{ colors:false,depth:2 });
console.dir(obj,{ colors:true,depth:1 });

console.time('시간측정');
for(let i=0; i<100000; i++){
    continue;
}
console.timeEnd('시간측정');

function b(){
    console.trace('에러위치 추적')
}

function a(){
    b();
}

a();

console.timeEnd('전체시간')

//console.time  , console.timeEnd  대응되어 같은 레이블을 가진 time 과 timeEnd 사이의 시간을 측정함
//console.log() 평범한 로그
//console.error 에러를 콘솔에 표시
/*console.dir : 객체를 콘솔에 표시할떄 사용  첫번째 인자로 표시할 객체를 넣고 , 두번째 인자로 옵션을 넣는다 . 
옵션의 colors 를 true로 하면 콘솔에 색이 추가되어 보기가 편해짐 depth는 객체안에 몇 단계까지 보여줄지를 결정함 기본값은 2
*/