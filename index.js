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