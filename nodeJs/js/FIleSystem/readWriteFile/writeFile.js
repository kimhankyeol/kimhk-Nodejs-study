const fs = require('fs');

fs.writeFile('./writeme.txt','글이 입력됩니다.',(err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt',(err,data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});

/*
writeFile() 메서드에 생성될 파일의 경로와 내용을 입력해줌 
도중에 에러가 발생하지 않았다면 같은 폴더 내에 writeme.txt 파일이 생성되었을것임
readFile() 로 파일을 읽어봄

이제 자바스크립트로도 파일 시스템에 간단하게 접근할 수 있게됨
fs모듈의 다른 메서드들을 살펴보기 전에 몇가지 개념을 미리 살펴보고 갈거임

*/