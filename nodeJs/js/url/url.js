/*인터넷 주소를 쉽게 조작하도록 도와주는 모듈 url
 url 처리에는 크게 두 가지 방식이 있음
 노드버전 7에서 WHATWG(웹표준을 정하는 단체의 이름) 방식의
  url과 예전부터 노드에서 사용하던 방식의 url이 있음
두 가지 방법을 다 알아두면 좋음
WHATWG 와 노드의 주소 체계 사진첨부
addr.jpg  
가운데 주소를 기준으로 
위쪽은 기존 노드의 url 구분 방법
아래쪽은 WHATWG의 url 구분 방법
*/
//url모듈안에 URL 생성자가 있음 
//이 생성자에 주소를 넣어 객체를 만들면 주소가 부분별로 정리됨 . 
//이 방식이 WHATWG의 url임
//username password origin searchParams 속성이 존재함
const url =require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate=001001000#anchor');
console.log('new URL() : ' ,myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr /book/bookList.aspx?sercate1=001001000#anchor');

//url.parse(주소)  주소를 분해함 WHATWG 방식과 비교하면 username 과 password 대신 auth 속성이 있고 searchParam 대신 query 가 있음
console.log('url.parse():',parsedUrl);

// url.format  WHATWG방식의 url 과 기존 노드의 url 모드 사용할 수 있음  /   분해되었던 url 객체를 다시 원래 상태로 조립함
console.log('url.format():',url.format(parsedUrl));
