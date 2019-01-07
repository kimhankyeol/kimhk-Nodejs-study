//fs 는 파일 시스템을 조작하는 다양한 메서드를 제공함 
//지금까지는 단순히 파일 읽기 / 쓰기 를 했지만 파일을 생성하고 삭제할수도 있고 폴더를 생성하고 삭제할수도 있음
//아래의 코드는 네가지 메서드를 소개함 .  모두 비동기 메서드이므로 한 메서드의 콜백에서 다른 메서드를 호출함
const fs = require('fs');

//fs.access(경로,옵션,콜백) 폴더나 파일에 접근할 수 있는지를 체크함
/*
두번쨰 인자로 상수를 넣었음
F_OK는 파일 존재여부 , R_OK는 읽기 권한여부 , W_OK는 쓰기 권한여부를 체크함
파일/ 폴더나 권한이 없다면 에러가 발생하는데 ,파일/폴더가 없을때의 에러코드는 ENOENT 임
*/
fs.access('./folder',fs.constants.F_OK | fs.constants.R_OK| fs.constants.W_OK,(err)=>{
    if(err){
        if(err.code==='ENOENT'){
            console.log('폴더 없음');
            
            //fs.mkdir(경로,콜백) 폴더를 만드는 메서드 .  이미 폴더가 있다면 에러가 발생하므로 먼저 access() 메서드를 호출해서 확인하는것이 좋음
            fs.mkdir('./folder',(err)=>{
                if(err){
                    throw err;
                }    
                console.log('폴더 만들기 성공');

                //fs.open(경로,옵션,콜백) 파일의 아이디(fd변수)를 가져오는 메서드임 . 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옴 
                //가져온 아이디를 사용해 fs.read()나  fs.write()로 읽거나 쓸수 있음 . 두번째 인자로 어떤 동작을 할것인지 설정할수 있음
                //쓰기 w , 읽기 r,기존 파일에 추가하려면 a 임
                fs.open('./folder/file.js','w',(err,fd)=>{
                    if(err){
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공',fd);

                    //fs.rename(기존경로 ,새경로 , 콜백) 파일의 이름을 바꾸는 메서드임 . 
                    //기존 파일 위치와 새로운 파일 위치를 적어주면됨 
                    //반드시 같은 폴더를 지정할 필요는 없으므로 잘라내기 같은 기능을 할 수 있음
                    fs.rename('./folder/file.js','./folder/newfile.js',(err)=>{
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });
                });
            });
        } else {
            throw err;
        }
    }else{
        console.log('이미 폴더 있음');
    }
});