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