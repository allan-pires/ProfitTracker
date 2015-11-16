function calculateWonValue(){
 
        // Variables
    var won_sum = 0.0;
   
    // Get HTML elements of won itens
    var won_itens = document.getElementById("returnlist").getElementsByClassName("full")[0].getElementsByClassName("oitm");
   
    // Calculates the profit of won itens
    for (i = 0; i < won_itens.length; i++) {
        var text = won_itens[i].getElementsByClassName("value")[0].textContent;
        var value = parseFloat(text.replace("$", ""));
        won_sum += value;
    }
 
    return won_sum;
}
 
function calculateReturnedValue(){
 
        // Variables
    var returned_sum = 0.0
 
        // Get HTML elements of returned itens
    var returned_itens = document.getElementById("returnlist").getElementsByClassName("full")[1].getElementsByClassName("oitm");
 
        // Calculates the total wealth
    for (i = 0; i < returned_itens.length; i++) {
        var text = returned_itens[i].getElementsByClassName("value")[0].textContent;
        var value = parseFloat(text.replace("$", ""));
        returned_sum += value;
    }
 
    return returned_sum;
}
 
function printTotalValues(won_value, returned_value){
 
    document.getElementsByClassName("bpheader")[0].innerHTML += '</br>';
 
    // Prints the total won itens value
    document.getElementsByClassName("bpheader")[0].innerHTML += '</br>Total won: $' + won_value.toFixed(2);
   
    // Prints the total returned itens value
    document.getElementsByClassName("bpheader")[0].innerHTML += '</br>Total returned: $' + returned_value.toFixed(2);
 
    // Prints the total value
    document.getElementsByClassName("bpheader")[0].innerHTML += '</br>Total (won + returned): $' + (won_value+returned_value).toFixed(2);
}
 
function main() {
    var won_value = calculateWonValue();
    var returned_value = calculateReturnedValue();
 
    printTotalValues(won_value, returned_value);
}
 
main();