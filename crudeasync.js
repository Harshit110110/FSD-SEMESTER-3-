const fs =require('fs');

//create the file


fs.writeFile("notes.txt","fs module started",(err)=>{
    if(err){
        console.error(err)
    return
    }    console.log("File created successfully")
});



//read the file
fs.readFile("notes.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data);
})


//append file content
fs.appendFile("notes.txt","this data will append in the last ",(err)=>{
    if(err){
        console.log(err);
    
    }
    console.log("data appended successfully");

})


// delete the file asynchronously
fs.unlink("notes.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted successfully");
})