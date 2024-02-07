let user = prompt("Enter your number for printing table");
user = parseInt(user);
for(let i=1;i<=10;i=i+1){
    let a=user*i;
    console.log(user+" * "+i+" = "+a);
}