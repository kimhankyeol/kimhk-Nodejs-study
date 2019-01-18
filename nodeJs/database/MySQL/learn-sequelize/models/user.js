module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    }, {
      timestamps: false
    });
  };

/*
시퀄라이즈는 알아서 id를 기본 키로 연결하므로 id 컬럼은 적어줄 필요가 없음
sequelize.define 메서드로 테이블명과 각 컬럼의 스펙을 입력함
MySQL테이블과 컬럼 내용이 일치해야 정확하게 대응됨
시퀄라이즈의 자료형은 MySQL의 자료형과는 조금 다름

VARCHAR는 STRING으로 , INT는 INTEGER ,TINYINT는 BOOLEAN으로 ,DATETIME은 DATE로 적음
INTEGER.UNSIGNED는 UNSIGNED옵션이 적용된 INT를 의미함 여기에 ZEROFILL 옵션도 사용하고 싶다면 INTEGER.UNSIGNED.ZEROFILL을 적으면됨
allowNull은 NOT NULL 옵션과 동일 
unique는 UNIQUE옵션임 
defaultValue는 기본값을 의미
define 메서드의 세번쨰 인자는 테이블 옵션인 timestamps속성의 값이 false 로 되어있음 
timestamps속성이 true 면 시퀄라이즈는 createdAt과 updateAt 컬럼을 추가함 
로우가 생성될떄 수정될떄의 시간이 자동으로 입력됨
하지만 예제에서는 직접 created_at 컬럼을 만들었으므로 timestamps속성이 필요하지 않음 
따라서 속성값을 false 로 하여 자동으로 날짜 컬럼을 추가하는 기능을 해제한거임

!!--기타 테이블 옵션 
paranoid , underscored , tableName 
실무에서는 timestamps: true 와 함께 paranoid: true를 자주 사용함
paranoid옵션은 timestamps가 true 여야만 사용할수 있음 
paranoid를 설정하면 deletedAt컬럼이 추가됨 
로우를 삭제하는 시퀄라이즈 명령을 내렸을떄 로우를 제거하는 대신 deletedAt에 제거된 날짜를 입력함
deletedAt 컬럼을 따로 만드는 이유는 데이터 복구를 염두에 두어서 그럼

underscored 옵션은 createdAt과 updateAt ,deletedAt 컬럼과 시퀄라이즈가 자동으로 생성해주는 관계컬럼들의 이름을 스네이크 케이스 형식으로 바꿔줌
created_At , update_At , deleted_At

tableName 옵션은 테이블이름을 다른 것으로 사용하고 싶을떄 사용
시퀄라이즈는 자동으로 define 메서드의 첫번쨰인자를 복수형으로 만들어 테이블 이름으로 사용함 
현재 user와 comment가 첫번쨰 인자로 설정 되어있음
시퀄라이즈는 이를 사용해 users 와 comments 테이블을 만듬 
이러한 자동 변환을 막고 싶으면 
tableName옵션에 값을 주어 해당값으로 테이블 이름을 만들수 있음




*/