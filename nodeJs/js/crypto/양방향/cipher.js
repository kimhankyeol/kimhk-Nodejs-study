
/*
양방향 대칭형 암호화 
암호화된 문자열을 복호화 할수 있습니다.
여기에서는 키 라는 것이 사용됨 
암호를 복호화 하려면 암호화 할 때 사용한 키와 같은 키를 사용해야 함.
*/

 const crypto =require('crypto');

//crpyto.createCipher(알고리즘, 키) 암호화 알고리즘과 키를 넣어줌 / 암호화 알고리즘은 aes-256-cbc 를 사용 / 사용가능한 알고리즘을 목록은 crpyto.getCiphers()를 하면 볼수 있음
const cipher = crypto.createCipher('aes-256-cbc','열쇠');

//cipher.update(문자열, 인코딩, 출력 인코딩) 암호화할 대상과 대상의 인코딩 , 출력 결과물의 인코딩을 넣어줌 
//보통 문자열은 utf8  암호는 base64를 많이 사용함
let result = cipher.update('암호화할 문장','utf8','base64');

//cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣어주면 암호화가 완료됨
result+= cipher.final('base64');
console.log('암호화',result);

//crpyto.createDecipher(알고리즘,키)  복호화 할때 사용함 / 암호화 할떄 사용했던 알고리즘과 키를 그대로 넣어주어야함
const decipher=crypto.createDecipher('aes-256-cbc','열쇠');

//decipher.update(문자열,인코딩, 출력 인코딩)  암호화된 문장 , 그 문장의 인코딩 ,복호화할 인코딩을 넣어줌
//createCipher 에서 utf8 , base64 순으로 넣었다면 createDecipher 에서는 역순인 base64,utf8순으로 넣으면됨
let result2=decipher.update(result,'base64','utf8');

//decipher.final(출력 인코딩) 복호화 결과물의 인코딩을 넣어줌
result2 += decipher.final('utf8');
console.log('복호화',result2);


//지금까지 배운 메서드 이외에도 crypto 모듈은 양방향 비대칭형 암호화 ,HMAC 등의 다양한 암호화를 제공하고 있으니 암호화가 필요하면 모듈이 어떤 메서드들을 지원하는지 확인해보면 좋습니다.