const billamount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelector("#no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click" ,function validateBillAndCashAmount() {
        hidemessage();
        
        if (billamount.value > 0) {
            if (cashGiven.value > billamount.value) {
                const amountTOBeReturned = cashGiven.value - billamount.value;
                calculateChange(amountTOBeReturned);
            } else {
                showMessage("The cash should be Equal to the bill Amount");
            }

        } else {
            showMessage("Invalid Bill Amount");
        }

    } );
  function calculateChange(amountTOBeReturned){
      for(let i=0 ; i< availableNotes.length ; i++){
          const numberOfNotes = Math.trunc(
              amountTOBeReturned/availableNotes[i]
          );
          amountTOBeReturned %= availableNotes[i];
          noOfNotes[i].innerText = numberOfNotes; 
        } 
          }
  
  function hidemessage(){
      message.style.display = "none";
  }

  function showMessage (msg){
    message.style.display = "block";
    message.innerText = msg;
  }
