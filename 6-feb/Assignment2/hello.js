let user=prompt("Enter Your Score");
user = parseInt(user);
if(user>=85 && user<=100){
    alert("Grade for score " +user+ " is A")
    console.log("Grade for score " +user+ " is A")
}
else if(user>=70 && user<=85){
    alert("Grade for score " +user+ " is B")
    console.log("Grade for score " +user+ " is B")
}
else if(user>=50 && user<=70){
    alert("Grade for score " +user+ "  is C")
    console.log("Grade for score " +user+ " is C")
}
else if(user>=30 && user<=50){
    alert("Grade for score " +user+ " score is D")
    console.log("Grade for score " +user+ " is D")
}
else{
    alert("Grade for score " +user+ "  is F")
    console.log("Grade for score " +user+ " is F")
}



