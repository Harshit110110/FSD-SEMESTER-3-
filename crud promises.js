import fs from 'fs/promises'


async function readFileContent(filename){
    const data=await fs.readFile(filename,'utf-8');
    console.log(data);

} 
readFileContent('notes.txt');

//delete the file
async function deletefile(filename){
    const data=await fs.unlink(filename);

}

async function writeFileMethod(filename,content){
    await fs.writeFile(filename,content);

}
writeFileMethod("notes.txt","Hello world");