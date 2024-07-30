// to use fs module we will have to require it in our file.
const fs =require('fs');


// let filepath='\Users\Satyam Prajapati\Desktop\NODE-JS\writeFile.js' ab itna kon likhega 
// isliye ye (__dirname)se kr dete h kyuki manually tough h
/* 
Remember:
'__dirname' gives you the path of currentfile jiske andar
   __dirname run kia h apne
   
   for example :writeFile.js currently hai inside:'\Users\Satyam Prajapati\Desktop\NODE-JS\writeFile.js' 
   toh writefile ke andar just use __dirname and same hi cheeze aa jaegi,manually type krne ki need nhi padegi
*/

//filepath: path absolute hota hai 
//computer ki root directory se lekar jis bhi file mai data likhna h us 
//file tak ka path

let filePath =__dirname + '/database/data.json'    //data.txt ko jab file json m kiye h to data.json hi kr do file ka naam
console.log(filePath);
console.log(__dirname);
/*
fs.writeFile(filePath,'Hello World')

     .then(()=>{
        console.log("sab kuch chal gaya");

     })
     .catch(err=>{
        console.log(err);
     })

*/
// aisw nhi ho raha ye bol rha ki promise m call back wala bhi do so,

let data ={
    text:'hello world',
    date:'25 july 2024'
}



fs.writeFile(filePath,JSON.stringify(data),(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("sab kuch badiya ho gaya");
    }
})