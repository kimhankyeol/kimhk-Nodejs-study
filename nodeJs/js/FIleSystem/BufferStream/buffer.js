//Buffer 객체는 여러가지 메서드를 제공함
//from(문자열) 문자열을 버퍼로 바꿀수 있음  
const buffer = Buffer.from('저를 버퍼로 바꿔주세요');
console.log('from():',buffer);
// length 속성은 버퍼의 크기를 알려줌 바이트 단위
console.log('length:',buffer.length);
//toString(버퍼)  버퍼를 다시 문자열로 바꿀수 있음 . 이때 base64 나 hex 를 인자로 넣으면 해당 인코딩으로 변환 가능
console.log('toString():',buffer.toString());

const array = [Buffer.from('띄엄 '),Buffer.from('띄엄 '),Buffer.from('띄어쓰기')];
//concat(배열) 배열 안에든 버퍼를 하나로 합침
const buffer2 = Buffer.concat(array);

//alloc(바이트) 빈 버퍼를 생성함   바이트를 인자로 지정해주면 해당크기의 버퍼가 생김
const buffer3 =Buffer.alloc(5);
console.log('alloc():',buffer3);