/*
HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능.
주로 AJAX와 함께 사용
*/
var formData =new FormData(); //FormData 생성자로 formData 객체를 만듬
formData.append('name','zerocho');
//생성된 객체의 append 메서드로 키 - 값 형식의 데이터를 저장할수 있음
//append 메서드를 여러번 사용해서 키 하나에 여러 개의 값을 추가해도 됨 
formData.append('item','orange');
formData.append('item','melon');
formData.has('item'); // has메서드는 주어진 키에 해당하는 값이 있는지 물어보는것
formData.get('item'); // orange  , get 메서드는 주어진 키에 해당하는 값 하나를 가져옴 
formData.get('item'); //['orange','melon'] , getAll 메서드는 해당하는 모든 값을 가져옴
formData.append('test',['hi','zero']);
formData.get('test');//hi , zero
formData.delete('test');
formData.get('test'); //null
formData.set('item','apple'); // apple , set 메서드는 현재 키를 수정하는 메서드
formData.getAll('item'); // ['apple']

//이제 AJAX로 폼 데이터를 서버에 보내면 됨
var xhr = new XMLHttpRequest();
var formData2 = new FormData();
formData2.append('name','김한결');
formData2.append('age','28');

xhr.onreadystatechange = function(){
    if(xhr.readyState === xhr.DONE){
        if(xhr.readyState===200||xhr.readyState===201){//성공
            console.log(xhr.responseText);
        }else{//실패
            console.log(xhr.responseText);
        }
    }
}

xhr.open('POST','https://www.zerocho.com/api/post/formdata');
xhr.send(formData2);

//성공하면 {"message":"폼데이터를 전송받았습니다 "} 라는 메시지를 받음