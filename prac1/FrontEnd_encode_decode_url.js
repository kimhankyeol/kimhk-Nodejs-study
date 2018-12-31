//AJAX 요청을 보낼때 'http://localhost:8003/search/노드' 처럼 주소에 한글이 들어가는 경우가 있음
//서버 종류에 따라 다르지만 서버가 한글 주소를 이해하지 못하는 경우가 있는데 
//이 때 window 객체 메서드인 encodeURIComponent 메서드를 사용 
//노드에서도 사용할 수 있음

var xhr =new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === xhr.DONE){
        if(xhr.readyState===200 || xhr.readyState===201){
            console.log(xhr.responseText);
        }else{
            console.error(xhr.responseText);
        }
    }
};
xhr.open('GET','https://www.zerocho.com/api/search/'+encodeURIComponent('노드'));
//한글 주소 인코딩 후 전송
//한글 주소 부분만 encodeURIComponent로 감싸주면 노드라는 한글주소는 문자열 변환됨
//https://www.zerocho.com/api/search/%EB%85%B8%EB%93%9C
xhr.send();//요청 전송

//받는쪽에서는 decodeURIComponent('%EB%85%B8%EB%93%9C')  //노드
//한글이 다시 원래대로 복구됨
//encodeURIComponent / decodeURIComponent 는 한글을 처리하기 위한것이라고 생각하면됨