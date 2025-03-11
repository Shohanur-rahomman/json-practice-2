const myNewFunction = async () => {
    try {
        const myData = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await myData.json();
        if (!myData.ok) {
            throw new Error(`HTTP error status:${myData.status}`)
        }
    } catch (error) {
        console.log(error);
    }
}
myNewFunction()

const normalPromise =  new Promise((resolve,reject)=>{
    const validUsers = true;
    const users = ['joy','khoy','yoy'];
    if(validUsers){
        resolve(users);
    }else{
        reject('not have users');
    }
})

normalPromise
.then((users)=>{
    console.log(users);
})
.catch((error)=>{
    console.log(error)
});

