const getUser = new Promise((resolve, reject) => {
    const users = true;
    const userList = ['lia', 'jali', 'kalia'];
    if (users) {
        resolve(userList);
    } else {
        reject('not found');
    }
});

getUser
    .then((users) => {
        console.log(users);
    }).catch((error) => {
        console.log(error);
    })


const newPromise = async()=>{
    try{
        const url = await fetch('https://jsonplaceholder.typicode.com/users');
        const myUser = await url.json();
        if(!url.ok){
            throw new Error(`fined an statue : ${url.status}`);
        }
        console.log(myUser);
    }catch(error){
        console.log(error);
    }
} 

newPromise()