const myArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// use loop:
const newArray=[];
for(i=0; i<myArray.length;i++){
    if(myArray[i]> 10){
       newArray.push(myArray[i])
    }
}
//use filter medoth:
console.log(newArray);
const anArray = myArray.filter(num=> num>10);
console.log(anArray);