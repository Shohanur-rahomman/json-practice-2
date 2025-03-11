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

const userFunction = async()=>{
    try{
        const newUrl = await fetch('https://jsonplaceholder.typicode.com/users');
        const myNewUser = await newUrl.json();
        if(!newUrl.ok){
            throw new Error(`fiend a fetch status :  ${newUrl.status}`)
        }
        console.log(myNewUser);

    }catch (error){
        console.log(error);
    }
}

userFunction()