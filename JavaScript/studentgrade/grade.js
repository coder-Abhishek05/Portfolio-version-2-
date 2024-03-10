let a = document.getElementById("Sub1");
let b = document.getElementById("Sub2");
let c = document.getElementById("Sub3");
let d = document.getElementById("Sub4");
let e = document.getElementById("Sub5");

let but = document.querySelector("#button");

but.addEventListener("click" , grade);

function grade() {
    let num1 = parseFloat(a.value);
    let num2 = parseFloat(b.value);
    let num3 = parseFloat(c.value);
    let num4 = parseFloat(d.value);
    let num5 = parseFloat(e.value);

    let cal = ((num1 + num2 + num3 + num4 + num5) / 500) * 100;
    cal = cal.toFixed(2);

    if (cal > 90) {
        document.getElementById("result").innerHTML = `Your grade is A+ <br> Your percentage is ${cal}%`;
    } else if (cal > 85 && cal <= 90) {
        document.getElementById("result").innerHTML = `Your grade is A <br> Your percentage is ${cal}%`;
    } else if (cal > 70 && cal <= 85) {
        document.getElementById("result").innerHTML = `Your grade is B+ <br> Your percentage is ${cal}%`;
    } else if (cal > 65 && cal <= 70) {
        document.getElementById("result").innerHTML = `Your grade is B <br> Your percentage is ${cal}%`;
    } else if (cal > 60 && cal <= 65) {
        document.getElementById("result").innerHTML = `Your grade is C+ <br> Your percentage is ${cal}%`;
    } else if (cal > 55 && cal <= 60) {
        document.getElementById("result").innerHTML = `Your grade is C <br> Your percentage is ${cal}%`;
    } else if (cal > 40 && cal <= 55) {
        document.getElementById("result").innerHTML = `Your grade is D <br> Your percentage is ${cal}%`;
    } else {
        document.getElementById("result").innerHTML = `You failed the examination`;
    }
}
