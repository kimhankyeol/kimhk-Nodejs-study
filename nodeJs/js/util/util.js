//util 이라는 이름처럼 각종 편의 기능을 모아둔 모듈임 .
//계속해서 API가 추가되고 있고 , 가끔 deprecated 되어 사라지는 경우도 있음
//deprecated 는  프로그래밍 용어로 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될것이라는 뜻
//새로운 기능이 나와서 기존 기능보다 더 좋을때 기존 기능을 deprecated 처리하곤함 
//이전 사용자를 위해 기능을 제거하지는 않지만 곧 없앨 예정이므로 더 이상 사용하지 말라는 의미임
//util 에서 자주 사용되는 두개의  메서드를 아래에 적음

const util =require('util');
const crypto = require('crypto');

//util.deprecate 함수가 deprecate 처리 되었음을 알려줌 / 첫번째 인자로 넣은 함수를 사용했을때 경고 메시지가 출력  . 두번째 인자로 경고메시지 내용을 넣으면 됨
const dontUseMe = util.deprecate((x,y)=>{
    console.log(x+y);
}, 'dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지마세요');

dontUseMe(1,2);

//util.promisify 콜백 패턴을 프로미스 패턴으로 바꿔줌 / 바꿀 함수를 인자로 제공하면 됨
//이렇게 바꾸어 두면 async / await 패턴까지 사용할수 있음
//앞에 사용한 randomBytes 와 비교 해보는게 좋음
//프로미스를 콜백으로 바꾸는 util.callbackify 도 있지만 자주 사용되지는 않음
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf)=>{
        console.log(buf.toString('base64'));
    })
    .catch((error)=>{
        console.error(error);
    })

