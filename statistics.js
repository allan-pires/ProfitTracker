var trigger = 0;

function betHistory(){
	if(trigger == 0){
		$('.box-shiny').after('<br /> <div class="statistics">Item name:</div>');
		trigger++;

		var placed_itens = document.getElementById("ajaxCont").getElementsByClassName("details9968")[0].getElementsByClassName("oitm");
		//var won_itens = document.getElementById("ajaxCont").getElementsByClassName("details9968")[1].getElementsByClassName("oitm");

		for (i = 0; i < placed_itens.length; i++) {
	        var text = placed_itens[i].getElementsByClassName("name")[0].getElementsByTag("b").textContent;
	        var value = parseFloat(text.replace("%20", "+"));
	        //won_sum += value;
	    }
		alert(text);
		console.log(placed_itens.length);
	}
}

function getPrice(){

	var request = $.ajax({
	  url: "http://steamcommunity.com/market/priceoverview/?currency=1&appid=570&market_hash_name=Green+Ural",
	  method: "GET",
	  data: { id : menuId },
	  dataType: "json"
	});
	 
	request.done(function( msg ) {
//  $( "#log" ).html( msg );
		alert(msg);
	});
	 
	request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );
	});
	}

function main() {

	//Shows Bet History
   	document.getElementsByClassName("button")[5].addEventListener("click", betHistory);
}
main();