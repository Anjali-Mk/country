// Date()-is a predefined class to access  date and time of the system 
//1)create an object for this 
function getTime(){
const time = new Date()
console.log(time);


const hour = time.getHours()
console.log(hour);

const min = time.getMinutes()
console.log(min);

const sec = time.getSeconds()
console.log(sec);

result.innerHTML = `${hour}:${min}:${sec} ${hour>123?'PM':'AM'}` 

setTimeout(()=>{
getTime()
},1000)
}
getTime()



