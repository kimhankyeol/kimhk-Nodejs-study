var express = require('express');
var User = require('../schemas/user');

var router = express.Router();


/* GET 
전체조회 요청이 들어오면 
User.find({}) 로 디비를 조회하고 .then 으로 콜백함수 실행
렌더링할떄 users 변수로 넣어줌
find 메서드는 User스키마를 require한뒤 사용할 수 있음
몽구스도 기본적으로 프로미스를 지원하므로 then 과 catch 를 이용해서 각각 조회 성공시 실패시 정보를 얻을수 있음 
 */

var express = require('express');
var User = require('../schemas/user');

var router = express.Router();
/*
router.get('/', function (req, res, next) {
  User.find({})
    .then((users) => {
      res.render('mongoose', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
*/
router.get('/',async(req,res,next)=>{
  try{
    const users = await User.find();
    res.render('mongoose',{users})
  }catch(error){
    console.error(error)
    next(error);
  }
})

module.exports = router;