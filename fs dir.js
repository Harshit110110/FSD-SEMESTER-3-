import fs from "fs"


//create a directory
fs.mkdir("mydir",(err)=>{
    if(err)
{
    console.log(err);
    return
}
console.log("directory created sucessfully");

})
console.log("directory created successfully");
fs.writeFile("script.js","Hello ")



fs.readdir("mydir",(err,files)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("files:",files);
})
