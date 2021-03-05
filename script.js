let array = [];

const items = (num) =>{
    return new Promise((resolve, reject) =>{
        array.push(num);
        setTimeout(() =>{
            const error = false;
            if(!error){
                resolve();
            } else{
                reject('error');
            }
        }, 3000);
    })
}

items(Math.random() * 2).then(console.log(array)).catch(error =>{
    console.log(error);
})