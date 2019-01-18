module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('comment',{
        comment:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:true,
            defaultValue:DataTypes.NOW
        }
    },{
        timestamps: false
    });
};

/*
Comment 모델이 조금 이상함 
user테이블과 연결된 commenter 컬럼이 없음
이 부분은 모델을 정의할때 넣어주어도 되지만 시퀄라이즈 자체에서 관계를 따로 정의 할 수 있음

*/