const myNewFunction = async () => {
    try {
        const myData = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await myData.json();

        if(!myData.ok){
            throw new Error(`HTTP error status:${myData.status}`)
        }

        console.log('my data',data);
    } catch (error) {
        console.log(error);
    }

}

myNewFunction()