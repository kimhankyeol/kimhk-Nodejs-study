


async function findAndSaveUser(Users){
    
    let user = await Users.findOne({});
    user.name='zero';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
    
}
/* 
함수 선언부를 일반 함수 대신 async function 으로 교체한 후 
프로미스 앞에 await을 붙여줌 
이제 함수는 해당 프로미스가 resolve될때까지 기다린뒤 다음 로직으로 넘어감
예를 들어 await Users.findOne({})이 resolve 될때까지 기다린뒤  user 변수를 초기화함

*/

//위 코드는 에러를 처리하는 부분이 없으므로 다음과 같이 추가 작업이 필요함

async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name='zero';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});
    }catch(error){
        console.error(error);
    }
}  

//try / catch 문으로 로직을 감쌈 . 프로미스의 catch 메서드 처럼 try / catch 문의 catch 가 에러를 처리

//화살표 함수도 async와 같이 사용할 수 있음

const findAndSaveUser = async (Users) => {
    try{
       let user = await Users.findOne({});  // let 으로 선언한 이유는 user 에 다른 함수를 초기화 하기 위해
       user.name='zero';
       user = await user.save();
       user = await Users.findOne({ gender : 'm'});
    }catch(error){
        console.error(error);
    }
};
    
//for문과 async/await 을 같이 써서 Promise.all 을 대체할수 있음 이것은 노드 10버전부터 지원하는 ES2018 문법
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1 , promise2]){
        console.log(promise)
    }
})();
//Promise.all 대신 for await of 문을 사용해서 프로미스를 반복하는 모습
//앞으로 중첩되는 콜백 함수가 있으면 프로미스를 거쳐 async /await 문법으로 바꾸는 연습을 해보기 바람
//코드가 간결해짐