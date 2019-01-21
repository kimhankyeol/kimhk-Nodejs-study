var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();
//아이디별로 조회 GET /comment/:id
/*
게시글 다큐먼트를 조회하는 라우터임
find 메서드에 옵션이 추가되어 있음
먼저 댓글을 쓴 사용자의 아이디로 댓글을 조회한 뒤 populate 메서드로 관련있는 컬렉션의 다큐먼트를 불러올 수 있음
Comment스키마 commenter 필드의 ref가 User로 되어 있으므로 알아서 users 컬렉션에서 사용자 다큐먼트를 찾아 합침
commenter 필드가 사용자 다큐먼트로 치환됨
이제 commenter 필드는 ObjectId 가 아니라 그 ObjectId를 가진 사용자 다큐먼트가 됨

*/
/*router.get('/:id', function (req, res, next) {
  Comment.find({ commenter: req.params.id }).populate('commenter')
    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});*/
router.get('/:id',async(req,res,next)=>{
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
    res.json(comments);
  } catch (error) {
    console.error(error);
      next(error);
  }
});
//댓글 등록 
/*
router.post('/', function (req, res, next) {
  const comment = new Comment({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  comment.save()
    .then((result) => {
      return Comment.populate(result, { path: 'commenter' });
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

다큐먼트를 등록하는 라우터임 
Comment 스키마로 comment 객체를 만들어 안에 다큐먼트 내용을 넣은 뒤 save메서드로 저장 comment.save() 를 populate 메서드를 통해 User 스키마와 합침
path 옵션으로 어떤 필드를 합칠지 설정해주면 됨
이것이 save 한뒤 populate 하는 방법
*/
router.post('/',async(req,res,next)=>{
  const comment = new Comment({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  const commentSave = await comment.save();
  const commentRes = await Comment.populate(commentSave,{path:'commenter'});
  res.status(201).json(commentSave);
});

//부분수정 업데이트
/*
다큐먼트 수정하는 라우터 수정에는 update 메서드를 사용 
시퀄라이즈와는 반대로 어떤 다큐먼트를 수정할지에 대한 쿼리 객체를 첫번째 인자로 제공하고 두번째 인자로는 수정할 필드와 값이 들어 있는 객체를 제공함
MySQL과는 다르게 $set 연산자를  사용하지 않아도 기입한 필드만 바꿔줌 
실수로 다큐먼트를 통쨰로 수정할 일이 없어 안전함
*/
/*router.patch('/:id', function (req, res, next) {
  Comment.update({ _id: req.params.id }, { comment: req.body.comment })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});*/
router.patch('/:id',async(req,res,next)=>{
  const result = await Comment.update({ _id: req.params.id }, { comment: req.body.comment });
  res.json(result);
});
//댓글 삭제 comment/:id
/*
다큐먼트를 삭제하는 라우터임 
remove 메서드를 사용하여 삭제함
remove메서드에도 update메서드와 유사하게 어떤 다큐먼트를 삭제할것인지 첫번쨰 조건을 넣어줌
*/
/*router.delete('/:id', function (req, res, next) {
 const result = Comment.remove({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});*/
router.delete('/:id',async(req,res,next)=>{
  const result = await Comment.remove({_id:req.params.id});
  res.json(result);
});

module.exports = router;