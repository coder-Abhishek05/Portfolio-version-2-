var inputBill = document.getElementById("customer-bill"); 
  var cashGiven = document.getElementById("cash-given"); 
  var checkBtn = document.getElementById("calbut");  
  var noOfNotes = document.querySelectorAll(".no-of-notes"); 
  var notes = [2000, 500, 100, 20, 10, 5, 1]; 
  function clickHandler() {  
     if (inputBill.value < 0) { 
        alert("Please Enter a positive value"); 
     } else { 
        var remaining = cashGiven.value - inputBill.value; 
        if (remaining < 0) { 
           alert("Give me more"); 
        } else { 
           for (var i = 0; i < notes.length; i++) { 
              const paisa = Math.trunc(remaining / notes[i]); 
              remaining %= notes[i]; 
              noOfNotes[i].innerText = paisa; 

           } 

        } 
     } 
  } 

  checkBtn.addEventListener("click", clickHandler); 