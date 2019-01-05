
/*
WHATWG와 노드의 url 취향에 따라 사용되지만 노드의 url 형식을 사용해야 하는경우가 있음
 주소가 host 부분 없이  pathname 부분만 오는 경우 (/book/bookList.apsx) , WHATWG 방식은 이 주소를 처리 할 수 없음
 나중에 배우면 서버를 만들때 host 부분없이 pathname 만 오는 주소를 보게됨

 WHATWG 방식은 search 부분을 searchParams라는 특수한 객체로 반환하므로 유용함
 search부분은 보통 주소를 통해 데이터를 전달할 때 사용함 
 search는 물음표(?)로 시작하고 그 뒤에 키 = 값 형식으로 데이터를 전달함
 여러 키가 있을때는 &로 구분함
http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript와 같은 주소에서는 
?page=3&limit=10&category=nodejs&category=javascript 이 부분이 search 임
 */

 //URL 생성자를 통해 myURL 이라는 주소 객체를 만들었음 . 
 //myURL 안에는 searchParams 객체가 있음 
 //이 객체는 search 부분을 조작하는 다양한 메서드를 지원
 const { URL } =require('url');
 const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
 console.log('searchParams : ',myURL.searchParams);

 //getAll(키)  키에 해당하는 모든 값들을 가져옴  , category 키에는 두가지 값  즉 nodejs 와 javascript의 값이 들어 있음
 console.log('searchParams.getAll() : ',myURL.searchParams.getAll('category'));

 //get(키) 키에 해당되는 첫번째값만 가져옴
 console.log('searchParams.get() : ', myURL.searchParams.get('limit'));

 //해당 키가 있는지 없는지를 검사함
 console.log('searchParams.has() : ', myURL.searchParams.has('page'));

 //searchParams 의 모든 키를 반복기 (iterator,ES2015 문법) 객체로 가져옴
 console.log('searchParams.keys() : ', myURL.searchParams.keys());

 //searchParams의 모든 값을 반복기 객체로 가져옴
 console.log('searchParams.value() : ', myURL.searchParams.values());

 //append(키,값)  해당 키를 추가함 . 같은 키의 값이 있다면 유지하고 하나 더 추가함
 myURL.searchParams.append('filter','es3');
 myURL.searchParams.append('filter','es5');
 console.log(myURL.searchParams.getAll('filter'));

 //같은 키의 값들을 모두 지우고 새로 추가함
 myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

//해당 키를 제거
myURL.searchParams.delete('filter');
console.log.apply(myURL.searchParams.getAll('filter'));

//조작한 searchParams 객체를 다시 문자열로 만듬 . search에 대입하면 주소 객체에 반영함
console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

//query 같은 문자열보다 searchParams가 유용한 이유는 query 의 경우 다음 챕터에 나오는 querystring 모듈을 한 번 더 사용해야 하기 때문임
