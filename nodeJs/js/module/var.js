const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports={
    odd,
    even
}
//var.js에 변수두개를 선언했음
//module.exports에 변수들을 담은 객체를 대입함
//이제 이 파일은 모듈로서 기능을함 . 변수들을 모아둔 모듈 
//다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값을 쓸 수 있음