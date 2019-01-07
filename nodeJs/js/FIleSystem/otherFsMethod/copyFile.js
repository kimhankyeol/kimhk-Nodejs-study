//노드 8.5버전 에서는 파일 복사 방법도 새로 추가 되었습니다.

//더이상 createReadStream 과 createWriteStream을 pipe 하지 않아도 됨

const fs = require('fs');

fs.copyFile('readme4.txt','writeme4.txt',(error)=>{
    if(error){
        return console.error(error);
    }
    console.log('복사 완료')

});

/*
readme4.txt 파일을 ->writeme4.txt 복사
동일한 내용 writeme4.txt 생성 되었을 것임 
첫번째 인자로 복사할 파일을 두번째 인자로 복사될 경로를 세번째 인자로 복사후 실행될 콜백함수를 넣음 

지금까지 노드로 파일 시스템에 접근하는 방법에 대해 알아보았음 .
자바스크립트로는 처음 접근해보는 분도 있을거임 
예제를 반복하고 응용도 해보면 곧 익숙해질것임 

*/
/*
노드 10버전에 fs 모듈을 프로미스 형식으로 사용하는 방법이 추가됨 
다음과 같이 fs 모듈로부터 promises 객체를 불러와 사용함

const fsPromises = require('fs').promises;
하지만 아직 실험적인 기능이므로   fs 프로미스에 대해 설명해놓은 사이트 참조
*/