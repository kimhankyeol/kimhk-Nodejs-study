// 이 예제에서는 프로세스가 멈추지 않도록 에러를 잡아보겠음
// 에러가 발생할 것 같은 부분을 try catch 문으로 감싸주면됨

setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('서버를 고장내주마');
    }catch(err){
        console.error(err);
    }
},1000);

//setInterval() 을 사용한 것은 프로세스가 멈추는지 여부를 체크하기 위해서임
//프로세스가 에러로 인해 멈추면 setInterval 도 멈출것임 
//setInterval 내부에 throw new Error()로 에러를 강제로 발생시킴

/*
에러는 발생하지만 try catch로 잡을 수 있고 setInterval도 직접 멈추기 전까지 계속 실행됨
에러가 발생할 것 같은 부분을 미리 try catch로 감싸면 됨
*/