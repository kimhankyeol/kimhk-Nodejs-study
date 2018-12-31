//AJAX
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){//요청에 대한 콜백
    if(xhr.readyState === xhr.DONE){//요청이 완료되면
        if(xhr.status === 200 || xhr.status === 201){//응답 코드가 200이나 201 이면
            console.log(xhr.responseText)//서버에서 보내주는 값 
        }else{
            console.error(xhr.responseText)
        }
    }
};
xhr.open('GET','https://www.zerocho.com/api/get'); //메서드와 주소 설정
xhr.send();//요청전송
/*
1. XMLHttpRequest 생성자로 xhr 객체 생성 
2. xhr.open 메서드에 요청 메서드와 요청 주소를 넣고 xhr.send 메서드로 보내면 됨
3. xhr.onreadystatechange는 이벤트 리스너로  요청한 후 서버로부터 응답이 올 때 응답을 받을수 있음
4. 응답 코드가 200번 대 숫자면 성공을 의미 하므로 xhr.responseText에는 성공한 내용이 담겨있을것이고 
그렇지 않으면 에러메시지 담김
5. 현재 설정된 주소는 실제로 동작하는 주소이고 콘솔에서 결과 받을 수 있음
6. 성공 하면 {} 받음
*/

//onreadystatechange 대신 onload 와 onerror 로 성공과 실패를 구별해도됨
var xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){  //성공
        if(xhr2.status===200||xhr2.status===201){
            console.log(xhr2.responseText);
        }
    }
    xhr2.onerror = function(){//실패
        console.error(xhr2.response);
    }
xhr2.open('GET','https://www.zerocho.com/api/get'); //메서드와 주소 설정
xhr2.send();//요청전송

//다음은 서버로 데이터를 같이 보내는 POST요청의 경우 . JSON 데이터를 보냄

var xhr3 = new XMLHttpRequest();
var data = {
    name : 'zerocho',
    birth : 1994
};
xhr3.onreadystatechange = function(){
    if(xhr3.status===200||xhr3.status===201){//성공
        console.log(xhr3.responseText);
    }else{//실패
        console.error(xhr3.responseText);
    }
}
xhr3.open('POST','https://www.zerocho.com/api/post/json');
xhr3.setRequestHeader('Content-Type','application/json');//타입은 json 형태
xhr3.send(JSON.stringify(data));// 데이터를 동봉해 전송,   JSON을 string 화 시켜 보냄
/*
1.전체적인 구조는 비슷한데 xhr3.send 메서드에 데이터를 넣어 보내는것이 위에거와 다름
2.xhr3.setRequestHeader 메서드 ,  서버로 보내는 컨텐츠가 JSON 형식임을 알려줌
3.현재 설정된 주소는 실제 동작하는 주소라서 결과값을 받을수 있음
4. POST요청의 겅우 에러가 발생하는데 , 이 에러를 해결하는 방법은 뒤에서 배움 p.70

*/
//다음 예제로 api를 받아보겠음  이건 좀더 공부하고
 