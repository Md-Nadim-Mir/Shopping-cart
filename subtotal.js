// get Element by id

function elementId(id){

    let common_price=document.getElementById(id).innerText;
    let commonPrice=parseFloat(common_price);
    console.log(commonPrice)
    return commonPrice;

   
}

//  total price 

function totalPrice(){

    let phone_price=elementId('phone-price');
    let case_price= elementId('case-price');

    let total_price=phone_price+case_price;

    let subTotal=document.getElementById('subtotal');
    subTotal.innerText=total_price;

    

     
    // subtotal int convert
    let subTotalString=subTotal.innerText;
    let subTotalInt=parseFloat(subTotalString);

    // tax calculated
    let taxString=(subTotalInt*0.1).toFixed(2);
    let tax=parseFloat(taxString);
    

    let taxTotal=document.getElementById('tax-total');
    taxTotal.innerText=tax;



    // final total
    let finalTotal=subTotalInt-tax;


    let final_Total=document.getElementById('final-total');
    final_Total.innerText=finalTotal;





}