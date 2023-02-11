
function main(){
    var input = document.getElementById("age");
    var age = input.value;
    
    
    if(age < 0 || age > 110){
        alert("The age is not allowed")

    }else if(age <=6 || age >= 60){
        alert("Ticket preice is: 4$")
    }else{
        alert("Ticket preice is: 6.50$")
    }

    
}