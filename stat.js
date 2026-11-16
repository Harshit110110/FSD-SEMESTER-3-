import fs from "fs";
fs.stat("notes.txt",(err,stat)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("information of [notes.txt]:", stat);
     console.log("size of the file :", stat.size,"Bytes");
     console.log("creation time of the file :", stat.birthtime.toLocaleString().split("T")[0]); 
     console.log("modification time of the file :", stat.mtime.toLocaleString());
     console.log("access time of the file :", stat.atime.toLocaleString());
     console.log("change time of the file :", stat.ctime.toLocaleString());
     
})