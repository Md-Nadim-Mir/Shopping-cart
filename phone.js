

// call a function for code reduce

function updatePhoneNumber(increase){

    let inputField=document.getElementById('phone-input-field').value;
    
    let inputValue=parseFloat(inputField);

    if(increase == true){

        inputValue=inputValue+1;
    }

    else{

          if( inputValue>1){
                inputValue=inputValue-1;
            }
    }
    
    document.getElementById('phone-input-field').value=inputValue;

   

     

    return inputValue;

}


// update casePrice

function updatePhoneTotalPricre(inputValue){

    let total_price=inputValue * 1219;

    
    
    let phonePrice=document.getElementById('phone-price')
    phonePrice.innerText=total_price;


  

}







// plus btn event handler added

document.getElementById('btn-phone-plus').addEventListener('click',function(){

    let inputValue=updatePhoneNumber(true);
    

    updatePhoneTotalPricre(inputValue)


    totalPrice();
    

})


// minus btn event handler added

document.getElementById('btn-phone-minus').addEventListener('click',function(){

    let inputValue= updatePhoneNumber(false);

    updatePhoneTotalPricre(inputValue);

    totalPrice();


})


