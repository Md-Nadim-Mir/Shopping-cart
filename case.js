

// call a function for code reduce

function updateCaseNumber(increase){

    let inputField=document.getElementById('case-input-field').value;
    
    let inputValue=parseFloat(inputField);

    if(increase == true){

        inputValue=inputValue+1;
    }

    else{

          if( inputValue>1){
                inputValue=inputValue-1;
            }
    }
    
    document.getElementById('case-input-field').value=inputValue;
    return inputValue;

}


// update casePrice

function updateCaseTotalPricre(inputValue){

    let total_price=inputValue * 59;
    
    let casePrice=document.getElementById('case-price')
    casePrice.innerText=total_price;

}



// plus btn event handler added

document.getElementById('btn-case-plus').addEventListener('click',function(){

    
    let inputValue= updateCaseNumber(true);

    updateCaseTotalPricre(inputValue);

    totalPrice()


})


// minus btn event handler added

document.getElementById('btn-case-minus').addEventListener('click',function(){

        
    let inputValue= updateCaseNumber(false);

    updateCaseTotalPricre(inputValue);

    totalPrice()

})


