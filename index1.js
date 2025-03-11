const newUser = new Promise((resolve,reject)=>{
    const users = false;
    const list = ['kim','jong','ogn'];
    if(users){
        resolve(list);
    }else{
        reject('user is not pound');
    };
});

newUser
.then((users)=>{
    console.log(users);
}).catch((error)=>{
    console.log(error);
})