const input = require("readline-sync");
let n = input.questionInt("enter the langth number :");
let arr=[],brr=[];
let i=0,j=0,k=0,p=0;
while(i<n)
{
  arr[i]=input.questionInt(`Enter the element for the index${i}=`);
  i++;
}
while(j<arr.length)
{
  brr[j]=arr[arr.length-1-j];
  j++;
}
console.log(arr,brr);

while(k<arr.length)
{
 if(arr[k]!=brr[k])
 {
  p++;
  break;    
 }
 k++;
}
if(p==0)
{
  console.log("pallindrome");
}
else 
{
  console.log("NOt a pallindrome");
}

