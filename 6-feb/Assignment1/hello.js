let user=prompt("Enter the number");
user = parseInt(user);
if(user<0){
    alert(user+" is Negative Number");
    console.log(user+" is Negative Number");
}
else if(user>0){
    alert(user+" is Positive Number");
    console.log(user+" is Positive Number");
}
else{
    alert(user+" is Zero");
    console.log(user+" is Zero");
}