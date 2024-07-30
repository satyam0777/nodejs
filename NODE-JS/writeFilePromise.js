// to use fs module we will have to require it in our file.
const fs =require('fs/promises');


let filePath =__dirname + '/database/data.json'
console.log(filePath);

//har jagah err first call back function hote h
// that means call back function ke andar we'll have the err as the argument first
let data={
    text:'hello world!!!!!!!!!!!!',
    date:'25 july 2024'
}




fs.writeFile(filePath,JSON.stringify(data))
   .then(()=>{
    console.log("sab badhiya")
   })
   .catch(err=>{
    console.log(err);
   })

/* iska use hote h jaise ki todo list banuga
data ko file m bhi store kr skta hu tb waha use hoga
file system ko use kr ke yaha bhi data use kr skte h
do something for your self




*/

