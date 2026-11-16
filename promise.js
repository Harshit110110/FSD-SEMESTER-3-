const promise1 = new Promise((resolve , reject)+>:
    
    let success = true
    if(success){
        resolve({
            id:123456,
            username: "veer"
        })

    }else{
        reject(new Error("Data not fetched"))
    }
})
promise1
.then((response)=>{
    console.log(response);

})
.catch((error)=>{
    console.log(error);
})