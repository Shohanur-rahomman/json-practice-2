const myFunction = new Promise((resolve, reject) => {
    const users = ['mona', 'kona', 'kona'];
    const validUsers = true;
    if (validUsers) {
        resolve(users);
    } else {
        reject('user not found');
    }

})

myFunction
    .then((users) => {
        console.log(users);
    }).catch((error) => {
        console.log(error);
    })

const newFun = async()=>{
    try{
        const url = await fetch('https://jsonplaceholder.typicode.com/users');
        const myUsers = await url.json();
        if(!url.ok){
            throw new Error(`fil to fetch status : ${url.status}`)
        }
        console.log(myUsers);

    }catch(error){
        console.log(error);
    }
}

newFun()