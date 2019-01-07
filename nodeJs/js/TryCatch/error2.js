//노드 자체에서 잡아주는 에러에 대해 알아보겠습니다.

const fs =require('fs');
setInterval(()=>{
    //fs.unlink()로 없는 파일을 지우고 있음 
    fs.unlink('./abcdefg.js',(err)=>{
        if(err){
            console.error(err);
        }
    });
},1000);
//에러는 발생하지만 다행히 노드 내장 모듈의 에러는 실행중인 프로세스를 멈추지 않음
//에러 로그를 기록해두고 나중에 원인을 찾아 수정하면됨
/*
 throw 를 하면 노드 프로세스가 멈춤 
 따라서 throw를 하는 경우에는 반드시 try catch문으로 throw한 에러를 잡아주어야 함
*/