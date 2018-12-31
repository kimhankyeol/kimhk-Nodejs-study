function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{//첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name ='zero';
        user.save((err)=>{//두번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m' },(err,user)=>{//세번째 콜백
            console.log('세번째 콜백');
            });
        });
    });
}

function findAndSaveUser(Users){
    Users.findOne({})
        .then((user)=>{
            user.name ='zero';
            return user.save();
        })
        .then((user)=>{
            return Users.findOne({gender:'m'});
        })
        .then((user)=>{
            console.log('세번째 콜백');
        })
        .catch(err=>{
            console.erroe(err);
        })  
}