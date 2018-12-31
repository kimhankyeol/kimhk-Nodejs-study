//비구조화 할당
//이름은 어색하지만 매우 유용한 기능 
//객체와 배열로부터 속성이나 요소를 쉽게 꺼낼수 있음

var candyMachine = {
    status:{
        name:'node',
        count:5
    },
    getCandy:function(){
       
        this.status.count--;
        return this.status.count;
    }
}
var getCandy = candyMachine.getCandy();
var count = candyMachine.status.count;
console.log(count)
//객체의 속성을 같은 이름의 변수에 대입하는 코드입니다. 이를 다음으로 바꿀수 있음

const candyMachine2 = {
    status:{
        name2:'node',
        count2:5
    },
    getCandy2(){
        this.status.count2--;
        return this.status.count2;
    }
};
const { getCandy2 , status:{ count2 } } = candyMachine2;
//console.log(candyMachine2.status.count2);

//위 문법도 유효한 구문임
/*
candyMachine2 객체 안의 속성을 찾아서 변수와 매치해줌 
count2 처럼 여러 단계안의 속성도 찾을수 있음
getCandy2 와 count2 변수가 초기화 된것 
*/

//배열도 비구조화 할수 있음

var array=['nodejs',{},10,true];
var node=array[0];
var obj=array[1];
var bool=array[array.length-1];

//다음과 같이 바꿀수 있음
const array2 =['nodejs',{},10,true];
const [node2,obj2,,bool2]=array2;
//node2 에는 nodejs , obj2 에는 {}, bool2에는 true 
//비구조화 할당 문법도 코드 줄 수를 상당히 줄여주므로 유용함
//특히 노드는 모듈을 사용하므로 이러한 방식을 자주 사용