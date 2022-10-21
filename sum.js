const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
console.log("eneter numbers to be and if you want to stop inter stop");
let total=0;
const getnumbers=()=>{
    readline.question("enter number :",num=>{
        if(num=="stop"){
            console.log(`total is: ${total}`);
            readline.close();            
        }else{
            total+=parseInt(num);
            getnumbers();
        }
        
    });
}
getnumbers();