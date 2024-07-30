const fs= require('fs/promises');

const filepath = __dirname +'/database/data.json';

let data =['coding','dancing','singing'];


fs.writeFile(filepath,JSON.stringify(data))
     .then(()=>{
        console.log("badiya chal gaya sab");
     })
     .catch(err=>{
        console.log(err)
     })