//promise
const promise = new Promise((resolve,reject) => {
    const sum = 1+1
    if (sum ===2) {
        resolve("sucess")
    }
    else
    {
        reject('error')
    }
})