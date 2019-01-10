const cluster = require('cluster');
const http = require('http');
const numCPUs =require('os').cpus().length;

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    //CPU 개수 만큼 워커를 생산
    for(let i=0;i<numCPUs;i+=1){
        cluster.fork();
    }
    //워커가 종료되었을떄
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        //cluster.fork();
        //워커가 종료 되면 다시 하나 생성
        cluster.fork();
    });
}else{
    //워커들이 포트에서 대기
    http.createServer((req,res)=>{
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(()=>{
            process.exit(1);
        },1000);
    }).listen(8085);

    console.log(`${process.pid}번 워커 실행`);
}

/*
클러스터에는 마스터 프로세스와 워커 프로세스가 있음
마스터 프로세스는 CPU개수만큼 워커 프로세스를 만들고 8085 포트에서 대기함
요청이 들어오면 만들어진 워커 프로세스에 요청을 분배함

워커 프로세스가 실질적인 일을 하는 프로세스 
이 컴퓨터의 CPU코어 개수만큼 생성

*/
/*
요청이 들어올 때마다 1초후에 서버가 종료되도록 했음
이제 서버를 실행함 process.pid 는 실행시 마다 달라짐 
각자 자신의 코어 개수에 맞게 워커가 실행되는지 확인
코어 개수만큼 새로고침하면 이제 모든 워커가 종료 되어 서버가 응답하지 않음

즉 코어개수 만큼 까지 오류가 발생해도 서버가 정상 작동 할 수 있다는 뜻임
종료된 워커를 다시 켜면 오류가 발생해도 계속 버틸 수 있음
워커 프로세스가 종료되었을떄 새로 하나를 생성해 보겠음 cluster.on() 이 부분
이제 워커가 죽을떄마다 새로운 워커가 하나 더 생성됨
하지만 이러한 방식으로 오류를 막으려는것은 좋지 않음
오류 자체의 원인을 찾아 해결해야됨
그래도 예기치 못한 에러로 인해 서버가 종료되는 현상을 방지 할수 있어 클러스터링을 적용해 두는 것이 좋음
직접 cluster 모듈로 클러스터링을 구현할 수도 있지만 , 실무에서는 pm2등의 모듈로 cluster 기능을 사용하곤함
pm2 모듈은 15장에서

REST API와 라우팅 으로 돌아가서
웹서버 주소는 크게 HTML 또는 CSS 파일을 요청하는 주소와 서버의 user 자원을 요청하는 주소로 나뉘어져 있음
만약 파일이나 자원의 수가 늘어나면 그에 따라 주소의 종류도 많아져야함
*/
