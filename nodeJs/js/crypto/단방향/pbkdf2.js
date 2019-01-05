
/*가끔 nopqrst라는 문자열이 qvew로 변환되어 abcdefgh 를 넣었을떄와 똑같은 출력 문자열로 바뀔떄도 있음
 이런 상황을 충돌이 발생했다고 표현 
 해킹용 컴퓨터의 역할은 어떠한 문자열이 같은 출력 문자열을 반환하는지 찾아내는것 
 여러 입력 문자열이 같은 출력 문자열로 변환될수 있으므로 abcdefgh 설정해도 nopqtrst로 뚫리는 사태가 발생하게 됨

해킹용컴퓨터의 성능이 발달함에 따라 기존 해시 알고리즘들이 위협받음
sha512도 취약점이 발견될거임 
그렇게 되면 더 강력한 알고리즘인 sha3로 이전하면됨

현재는 주로 pbkdf2 , bcrypy , scrypt 라는 알고리즘으로 비밀번호를 암호화 하고 있음
이중 노드에서 지원하는 pbkdf2에 대해 알아 보겠음 .
pbkdf2는 간단히 말하면 기존 문자열에 salt라고 불리는 문자열을 붙인후 해시 알고리즘을 반복해서 적용하는것 
 */

 const crypto =require('crypto');

 crypto.randomBytes(64,(err,buf)=>{
    const salt = buf.toString('base64');
    console.log('salt:',salt);
    crypto.pbkdf2('비밀번호',salt,100000,64,'sha512',(err,key)=>{
        console.log('password:',key.toString('base64'));
    });
 });
 /*
 1.randomBytes() 메서드로 64 바이트 길이의 문자열을 만들어줌 , 이것이 salt 가 됨
 2.pbkdf2() 메서드에는 순서대로 비밀번호 , salt ,반복횟수,출력 바이트 ,해시 알고리즘을 인자로 넣어줌
 3. 예시에서는 10만번 반복해서 적용한다고 했음
 4. 즉 sha512로 변환된 결과값을 다시 sha512로 변환하는 과정을 10만번 반복함
너무 많이 반복하는것이 아닌가 걱정될수 있지만 1초 정도 밖에 걸리지 않음 
컴퓨터의 성능에 좌우되므로 조금 느리다 싶으면 반복 횟수를 낮추고 , 너무 빠르다 싶으면 1초 정도가 될떄까지 반복 횟수를 늘림

pbkdf2는 간단하지만 bcrypt scrypt보다 취약하므로 나중에 더 나은 보안이 필요하면 scrypt 를 사용하면됨

 */