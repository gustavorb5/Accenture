const myPromise = new Promise((resolve, reject) =>{
    let num = Math.random()*2;
    if(num != 0){
        resolve('Zafaste');
    } else{
        reject('ja, te toco 0');
    }
});

myPromise.then(a => console.log(a)).catch(a => console.log(a));