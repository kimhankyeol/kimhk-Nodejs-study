const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        //1
        /*
        개발환경이 아닐때 몽구스가 생성하는 쿼리 내용을 콘솔을 통해 확인할수 있는 부분임
        */
       if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
      }
    }
    //2 
    /*
    몽구스와 몽고디비를 연결하는 부분임
    몽고디비 주소로 접속을 시도함 
    접속을 시도하는 주소의 데이터베이스는 admin이지만 실제로 사용 할 데이터베이스는 nodejs이므로
    두번쨰 인자로 dbName 옵션을 주어 nodejs 데이터베이스를 사용하게 했음 마지막 인자로 주어진 콜백 함수를 통해 연결 여부를 확인함 
    */
    mongoose.connect('mongodb://root:root@localhost:27017/admin',{
        dbName: 'nodejs',
    }, (error) => {
      if (error) {
        console.log('몽고디비 연결 에러', error);
      } else {
        console.log('몽고디비 연결 성공');
      }
    });

    connect();
    //3
    /*
    몽구스 커넥션에 이벤트 리스너를 달아둠 
    에러 발생시 에러내용을 기록하고 연결 종료시 재연결을 시도함
    */
    mongoose.connection.on('error', (error) => {
        console.error('몽고디비 연결 에러', error);
      });
      mongoose.connection.on('disconnected', () => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
        connect();
      });
    //4
    /* 다음 절 8.6.2 에서 정의할 User 스키마와 Comment 스키마를 연결하는 부분임 */
    require('./user');
    require('./comment');

  };
