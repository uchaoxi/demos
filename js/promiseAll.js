function promiseAll(promiseArr) {
    let result = [];
    return new Promise(resolve => {
        promiseArr.forEach(p => {
            p.then(res => {
                result.push(res);
                if (result.length === promiseArr.length) {
                    resolve(result);
                }
            });
        });
    });
}



const p1 = new Promise(resolve => {
    setTimeout(()=>{
        resolve('p1 done')
    }, 1000);
});

const p2 = new Promise(resolve => {
    setTimeout(()=>{
        resolve('p2 done')
    }, 2000);
});


promiseAll([p1, p2]).then(res=> {
    console.log(res); 
})