const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);

//몽구스 모듈에서 Schema 생성자를 사용해 스키마를 만듬
/*
시퀄라이즈에서 모델을 정의하는 것 비슷함
필드를 각각 정의 
몽구스 스키마에서 특이한 점은 String , Number, Date,Buffer ,Mixed ,ObjectId,Array를 값으로 가질수 있다는 점임
몽고디비의 자료형과 살짝 다름
편의를 위해 종류 수를 줄여둠

name필드의 자료형은 String 이고 필수이며 고유한 값이어야 함
age필드는 Number자료형이고 필수 이며 ,married 필드는 불 값 자료형이고 필수임 
comment 필드는 String 자료형임
required나 default등의 옵션이 필요하지 않다면 간단하게 자료형만 명시하면 됨
createdAt필드는 Date 자료형이고 기본값은 Date.now(데이터 생성 당시의 시간)임
마지막에 몽구스의 model 메서드로 스키마와 몽고디비 컬렉현을 연결하는 모델을 만듬
 */