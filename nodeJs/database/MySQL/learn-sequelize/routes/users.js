var express = require('express');
var User = require('../models').User;

var router = express.Router();

router.get('/',async(req,res,next)=>{
  try{
    const users = await User.findAll();
    res.json(users);
  }catch(err){
    console.error(err);
    next(err);
  }
});

router.post('/',async(req,res,next)=>{
  try{
    const result =await User.create({
      name:req.body.name,
      age:req.body.age,
      married:req.body.married
    });
    console.log(result);
    res.status(201).json(result);
  }catch(err){
    console.error(err);
    next(err);
  }
});

module.exports = router;

/*
GET /users 와 POST /users 주소로 요청이 들어올떄의 라우터임
각각 사용자를 조회하는 요청과 사용자를 등록하는 요청을 처리함
GET / 에서도 사용자 데이터를 조회했지만
GET /users 에서는 데이터를 JSON으로 반환한다는것에 차이가 있음
*/