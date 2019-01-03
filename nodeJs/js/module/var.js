/*
const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports={
    odd,
    even
}
*/
//var.js에 변수두개를 선언했음
//module.exports에 변수들을 담은 객체를 대입함
//이제 이 파일은 모듈로서 기능을함 . 변수들을 모아둔 모듈 
//다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값을 쓸 수 있음



// 다른 예

exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';

//지금 까지 모듈을 만들때는 module.exports 만 사용했는데  module객체말고 exports 객체로도 모듈 만들수 있음
//module.exports로 한번에 대입하는 대신 각각의 변수를 exports 객체에 하나씩 넣었음
//동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기때문임
//실제로 console.log(module.exports === exports)를 하면 true 가 나옴 
//따라서 exports 객체에 add 함수를 넣으면 module.exports에도 add 함수가 들어감
//exports ---> module.exports ----> {}                     /// -----> 참조

/*
exports 객체 사용시 
exports 객체 사용시에는 module.exports 와의 참조 관계가 깨지지 않도록 주의해야함
module.exports에는 어떤 값이든 대입해도 되지만 exports에는 반드시 객체처럼 속성명과 속성값을 대입해야 함 .
exports에 다른 값을 대입하면 객체의 참조 관계가 끊겨 더 이상 모듈로 기능하지 않습니다.

exports를 사용할 때는 객체만 사용할 수 있으므로 func.js 와 같이 module.exports에 함수를 대입하는 경우에는 exports로 바꿀수 없음
중요!!
exports 와 module.exports에는 참조관계가 있으므로 한 모듈에 exports 객체와 module.exports를 동시에 사용하지 않는것이 좋음

*/

