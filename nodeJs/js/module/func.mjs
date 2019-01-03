//ES2015 모듈
//ES2015 가 도입되면서 자바스크립트도 자체 모듈 시스템 문법이 생겼습니다.
//노드의 모듈 시스템과는 문법이 조금 다릅니다 
//func.js를 ES2015모듈 스타일로 바꿔보겠음

import { odd,even } from './var';

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

export default checkOddOrEven;

//require 는 import
//module.export 는 export default로 바뀜
//노드에서 9 버전 부터 ES2015 모듈 시스템 사용할수 있음
//하지만 확장자 mjs 써줘야되고 실행시 node --experimental-module 파일명 특별한 옵션을 붙어줘야함

//require함수나 module 객체는 따로 선언하지 않았지만 사용할 수 있었음 
//노드에서 기본적으로 제공하는 내장 객체이기 때문에 사용가능