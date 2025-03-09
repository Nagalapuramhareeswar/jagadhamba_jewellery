function changetoshop() {
    document.getElementById("shop-form").style.display="block";
    document.getElementById("kacha-form").style.display="none";
    document.getElementById("shop").style.backgroundColor="#dad200";
    document.getElementById("kacha").style.backgroundColor="#ffffff";
    document.getElementById("kacha").style.color="#000000";

}
function changetokacha() {
    document.getElementById("kacha-form").style.display="block";
    document.getElementById("shop-form").style.display="none";
    document.getElementById("kacha").style.backgroundColor="#dad200";
    document.getElementById("shop").style.backgroundColor="#ffffff";
    document.getElementById("shop").style.color="#000000";
}

function myfunc(){
    let weightcount=document.getElementById("weight").value;
    let percentagecount=document.getElementById("percentage").value;
    let ratecount=document.getElementById("rate").value;
    let price = weightcount*ratecount;
    let percentage = (price/100)*percentagecount;
    let gst=(price/100)*3;
    price=price+percentage-gst;
    let total=price+gst;
    price=formatNumberWithCommas(price);
    gst=formatNumberWithCommas(gst);
    total=formatNumberWithCommas(total);
    document.getElementById("price").innerHTML="Price :"+" "+price;
    document.getElementById("gst").innerHTML="Gst(3%) : "+" "+gst;
    document.getElementById("total").innerHTML="Total :"+" "+total;
}
function clearrate(){
    document.getElementById("price").innerHTML="Price : ";
    document.getElementById("gst").innerHTML="Gst(3%) : ";
    document.getElementById("total").innerHTML="Total : ";
}

function calckacha(){
    let kachaweight = document.getElementById("kacha-weight").value;
    let kachatouch = document.getElementById("kacha-touch").value;
    let kacharate = document.getElementById("kacha-rate").value;
    let price = (kachaweight*kachatouch*kacharate)/100;
    document.getElementById("kacha-total").innerHTML="Total :"+" "+price;
}

function clearkacha(){
    document.getElementById("kacha-total").innerHTML="Total :";
}

function formatNumberWithCommas(number) {
    if (isNaN(number)) return "Invalid Number";
    return number.toLocaleString('en-US');
}
