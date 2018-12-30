const condition = true; //true 면 resolve , false 면 reject
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message); //성공(resolve)한 경우 실행
        return new Promise((resolve,reject)=>{
            resolve(message+':메시지1 받음');
        })
    })
    .then((message2)=>{
        console.log(message2)
        return new Promise((resolve,reject)=>{
            resolve(message2+':메시지 2 받음');
        })
    })
    .then((message3)=>{
        console.log(message3)
    })
    .catch((error)=>{
        console.log(error); //실패 (reject)한 경우 실행
    });