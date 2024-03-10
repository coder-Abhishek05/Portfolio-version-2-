window.onload = () => {
    let button = document.querySelector("#btn");
 
    button.addEventListener("click", answer);
};

let a = document.getElementById("height"); 
let b = document.getElementById("weight"); 

function answer(){
    let height = parseFloat(a.value); 
    let weight = parseFloat(b.value); 

    let right = weight / (height ** 2); 

    let formattedBMI = right.toFixed(2);

    if (right < 18.5){
        document.getElementById("answer").innerHTML = `You are underweight. Your BMI is ${formattedBMI}.`;
    }
    else if (right >= 18.5 && right < 24.9){
        document.getElementById("answer").innerHTML = `You are normal weight. Your BMI is ${formattedBMI}.`;
    }
    else if (right >= 25 && right < 29.9){
        document.getElementById("answer").innerHTML = `You are overweight. Your BMI is ${formattedBMI}.`;
    }
    else {
        document.getElementById("answer").innerHTML = `You are obese. Your BMI is ${formattedBMI}.`;
    }
}



