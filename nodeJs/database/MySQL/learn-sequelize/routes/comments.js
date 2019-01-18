var express = require('express');
var { User,Comment } = require('../models');

var router = express.Router();
//전체조회
router.get('/all',async (req,res,next)=>{
       try{
        var comments = await Comment.findAll({include:{
            model: User
        }});
        res.json(comments); 
    }catch(err){
        console.error(err);
        next(err);
    } 
});
//조회
router.get('/:id',async (req,res,next)=>{
   try{
    var comments = await Comment.findAll({
        include:{
            model: User,
            where:{
                id:req.params.id
            }
        }
    });
    res.json(comments);
   }catch(err){
    console.error(err);
    next(err);
   }
});

//등록
router.post('/',async (req,res,next)=>{
    try{
        var result = await Comment.create({
            commenter: req.body.id,
            comment: req.body.comment
        });
        console.log(result);
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

//수정
router.patch('/:id',async (req,res,next)=>{
    try{
        var result = await Comment.update({comment:req.body.comment},{where:{id:req.params.id}});
        console.log(result);
        res.json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

//삭제
router.delete('/:id',async (req,res,next)=>{
    try{
        var result = await Comment.destroy({where:{id:req.params.id}})
        console.log(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;

/*
댓글에 관련되 CRUD 작업을 하는 라우터임
GET /comments , POST /comments ,
PATCH /comments/:id, DELETE /comments/:id 를 등록
*/

/*
//조회
findAll 메서드에 옵션이 추가되어 있음
include옵션으로 관련있는 모델을 불러올수 있음
hasMany나 belongsTo로 연결해두어야 include 옵션을 사용할 수 있음
include 옵션에서 models 속성에는 User 모델을 where 속성에는 :id 로 받은 아이디 값을 넣어줌 
:id는 와일드카드 라우터임

//등록
댓글을 생성하는 라우터임 
commenter 속성에 사용자 아이디를 넣어 사용자와 댓글을 연결해줌

//수정 삭제
각각 update , destroy 메서드를 사용함 
update 메서드에는 먼저 첫번쨰 인자로 수정할 컬럼과 값이 들어있는 객체를 제공하고 두 번째 인자로는 어떤로우를 수정할 것인지에 대한 조건을 제시함 
where옵션으로 id가 :id에 해당하는 값인 댓글을 수정하도록했음
destroy 메서드에도 update메서드와 유사하게 where 옵션으로 어떤로우를 삭제할지 지정해줌

*/