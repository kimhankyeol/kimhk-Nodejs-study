var express = require('express');
var User = require('../models').User;

var router = express.Router();

router.get('/', function(req, res, next) {
  User.findAll()
    .then((users) => {
      res.render('sequelize', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
/*
먼저 GET / 로 접속했을떄 라우터임
User.findAll 메서드로 모든 사용자를 찾은후 sequelize.pug를 렌더링 할떄 결과값인 users를 넣어줌
시퀄라이즈는 프로미스를 기본적으로 지원하므로 then과 catch 를 사용해서 각각 조회 성공시와 실패시의 정보를 얻을 수 있음
이렇게 미리 데이터베이스에서 데이터를 조회한후 템플릿 렌더링에 사용할수 있음

async/await

router.get('/',async(res,req,next)=>{
  try{
    const users = await User.findAll();
    res.render('sequelize,{ users });
  }catch(error){
    console.log(error);
    next(error);
  }
});


*/

module.exports = router;