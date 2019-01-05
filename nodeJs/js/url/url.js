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

/*
WHATWG와 노드의 url 취향에 따라 사용되지만 노드의 url 형식을 사용해야 하는경우가 있음
 주소가 host 부분 없이  pathname 부분만 오는 경우 (/book/bookList.apsx) , WHATWG 방식은 이 주소를 처리 할 수 없음
 나중에 배우면 서버를 만들때 host 부분없이 pathname 만 오는 주소를 보게됨

 WHATWG 방식은 search 부분을 searchParams라는 특수한 객체로 반환하므로 유용함
 search부분은 보통 주소를 통해 데이터를 전달할 때 사용함 
 search는 물음표(?)로 시작하고 그 뒤에 키 = 값 형식으로 데이터를 전달함
 여러 키가 있을때는 &로 구분함
*/