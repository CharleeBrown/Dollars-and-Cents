function getCents(){
    console.clear();
    var dollars = parseFloat(document.getElementById("dollarAmount").value);

    var cents = dollars * 100;

    var dimes = Math.round(cents / 10);
    var nickles = Math.round(cents / 5);
    var quarters = Math.round(cents / 25);
    var pennies = Math.round(cents);
  
    
    console.log(dimes + " dimes");
    console.log(nickles + " nickles");
    console.log(quarters + " Quarters");
    console.log(pennies + " pennies");

    
}

function getClear(){
    document.getElementById("dollarAmount").value = "";
}



