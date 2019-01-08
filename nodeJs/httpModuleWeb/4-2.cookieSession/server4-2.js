// 자바스크립트에서 당장 사용해야 할 5가지의 배열 메소드들(Array)

//배열에서 특정값
//var isExist = (array.indexOf("특정값")!==1);

//filter
var arr = [
    {"name":"apple","count":2},
    {"name":"orange","count":5},
    {"name":"pear","count":6},
    {"name":"orange","count":7}
];
var newArr = arr.filter((item)=>{
    return item.name === "orange";
});

console.log("Filter result:",newArr);

//forEach 
var array = [1,2,3,4,5];

array.forEach((v,i)=>{
    if(v===3){
        //array 배열에서 숫자인 v=3을 찾고  i=몇번째에 위치해있는지
        console.log(v+":"+i);
    }
});

//map    
// map의 기본 원리는 간단함 
// 반복문을 돌며 배열안의 요소들을 1대1로 짝지어 주는것,  그래서 이름이 map 
//중요한점은 map 을 실행하는 배열과 결과로 나오는 배열이 다른 객체라는 점!!!!!!! 기존 배열을 수정하지 않고 새로운 배열을 만들어냄 
//단 배열 안에 객체가 들어있는 경우 객체는 공유됨  즉 map은 배열을 1대1로 짝짓되 기존객체를 수정하지 않는 메서드
var a = [1,2,3,4,5];
//undefined

var b = a.forEach((v,i)=>{
    console.log("map forEach"+v);
    return v+1;
});
console.log("forEach :"+b);

//[2,3,4,5,6]
var c = a.map((v,i)=>{
    console.log("map map :"+v);
    return v+1
});
console.log("map"+c);
//reduce
//reduce는 강력한 친구임
//배열.reduce((누적값,현재값,인덱스,요소)=>{ return :결과},초깃값);
//이전값이 아니라 누적값이라는것에 주의 해야함
var a = ["a","b","c","d","e","f","c","c","c"];
var b = a.reduce((x,y)=>{
    console.log("x:",x);
    console.log("y:",y);
    x[y] = ++x[y] || 1;
    return x;
},{});


//reduce 예제

const oneTwoThree = [1,2,3];
let result = oneTwoThree.reduce((acc,cur)=>{
    acc.push(cur%2?'홀수':'짝수');
    return acc;
},[]);

//홀수 ,짝수, 홀수
console.log("reduce예제 : "+result);


//reduce는 비동기 프로그래밍 할떄에도 유용함
const promiseFactory = (time)=>{
    return new Promise((resolve,reject)=>{
        console.log(time);
        setTimeout(resolve,time);
    });
};

[1000,2000,3000,4000].reduce((acc,cur)=>{
    return acc.then(()=>promiseFactory(cur));
},Promise.resolve());

/*
바로 1000
1초후 2000
2초후 3000
3초후 4000

초깃값을 Promise.resolve()로 한 후에 , return 된 프로미스에 then 을 붙여 다음 누적값으로 넘기면됨 , 프로미스가 순차적으로 실행됨을 보장함

반복되는 모든 것에는 reduce를 쓸수 있음을 기억하면됨
그리고 배열의 메서드인 sort , filter , every , some,find,findindex,includes 정도 까지 알아두면 좋음
*/