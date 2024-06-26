const byteSize = (str) => {
// write your code here


let x=0;

for(let i=0;i<str.length;i++){
   if(str[i]==" ")
x++;
}
return str.length-x;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));