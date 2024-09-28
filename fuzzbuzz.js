var output = [];
var count = 1;

function fizzbuzz(){

while(count<=100){
        
if(count % 3 === 0 && count % 5 === 0){
    output.push("fizzBuzz")
}
else if (count % 3 === 0){
    output.push("fizz");
}
else if(count % 5 === 0){
    output.push("buzz")
}
else{
    output.push(count);
}
count++;

    console.log(output);
}
}

var output = [];


function fizzbuzz(){

for(var count = 1; count<=100; count++){
        
if(count % 3 === 0 && count % 5 === 0){
    output.push("fizzBuzz")
}
else if (count % 3 === 0){
    output.push("fizz");
}
else if(count % 5 === 0){
    output.push("buzz")
}
else{
    output.push(count);
}

    console.log(output);
}
}
