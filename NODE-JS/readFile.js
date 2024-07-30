const fs= require('fs/promises');


/* jo kuch bhi krenge sab documentation se padh kr krna hoga
aur ek do project bane ke bad hi hoga



*/
let filePath=__dirname + '/database/data.json'
// console.log(filePath);

fs.readFile(filePath,{
    encoding:'utf-8'

}).then((data)=>{
/* agr ab read krna chte ho to 
  JSON.parse(data )kr do to javascript ka object ban jayega

*/
    data= JSON.parse(data);
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})