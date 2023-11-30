
let total_balance = document.querySelector("#total_balance");
let add_money = document.querySelector("#add_money");
let withdraw  = document.querySelector("#withdraw");
let history = document.querySelector("#history")
let total= 1000 ;


let data = [] ; //! pul cixarislari olan array


//* history

function updateHistory(){   
    const newData = data.reverse()
    .map(function(item,index,list){  
        return `<p class="txn-list">Payment <span class="debit-amount">${item}</span></p>  
`
        
    })
    .join("")

    history.innerHTML = newData

}
//*


//? adding money
add_money.addEventListener("click" , function() {   

    let requested_amount = prompt("Enter the amount to add:") 
  
    if(requested_amount > 0 && requested_amount !== null && requested_amount !== ""){ 
        requested_amount = parseFloat(requested_amount); 

        if(requested_amount > 0){   
            total+=requested_amount;
            alert("New total balance: $" + total.toFixed(2));
            //!
            total_balance.innerHTML = "$" + total.toFixed(2);
            // requested_amount.style.color = "green" //css`de rengi silib bunu add edende history bolmesine dusmur
        
            //*
            data.push(requested_amount);
            updateHistory();
        }else { 
            alert("Invalid cash-in amount. Amount must be greater than 0.")
        }    
    } else {
        alert ("Invalid input or operation canceled.")
    }

   
    // console.log(data);
});


//! withdraw 

withdraw.addEventListener("click",function(){   
    let requestedWithdraw = prompt("Enter the amount to withdraw"); 
    // console.log(requestedWithdraw);
  
    if(requestedWithdraw> 0 && requestedWithdraw!== null && requestedWithdraw!== ""){ 
        requestedWithdraw= parseFloat(requestedWithdraw); 


        if(requestedWithdraw>0 && requestedWithdraw<= total){
            total -= requestedWithdraw  ;
            alert("New total balance: $" + total.toFixed(2));
             //!
            total_balance.innerHTML = "$" + total.toFixed(2);
            // requestedWithdraw.style.color = "red";
 

            //*
            data.push(-requestedWithdraw); //pul cixardanda yaninda cixilma isaresi olsun deye 
            // console.log(data);
            updateHistory(); // her emeliyat gorunmeyi ucun funskiyasi if sertinde cagiriram
            // requestedWithdraw.style.color = "red"
        }else{ 
            alert("Invalid withdraw amount. Amount must be greater than 0, less or equal to your balance.")
        }
    
    }  else {
        alert ("Invalid input or operation canceled.")   
    }  

   

})

