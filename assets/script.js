var liczba=0;
var liczba2=0;
var koszt=0.00;
var koszt2=0.00;
var shipping=20;

window.onload = function () {
document.getElementById("ile").innerHTML= liczba;
document.getElementById("ile2").innerHTML= liczba2;
document.getElementById("cena").innerHTML= koszt + "$";
document.getElementById("cena2").innerHTML= koszt2 + "$";
document.getElementById("subtotal").innerHTML="$" + (koszt + koszt2);
document.getElementById("shipping").innerHTML="$" + shipping;
document.getElementById("total").innerHTML="$" + (koszt + koszt2 + shipping);
document.getElementById("koszyk").innerHTML=liczba + liczba2;
}

function dodaj (){
	if(liczba >= 0){
		liczba+=1;
		koszt+=300.00;
		document.getElementById("ile").innerHTML= liczba;	
		document.getElementById("cena").innerHTML= koszt + "$";	
		document.getElementById("subtotal").innerHTML="$" + (koszt + koszt2);
		document.getElementById("total").innerHTML="$" + (koszt + koszt2 + shipping)
		document.getElementById("koszyk").innerHTML=liczba + liczba2;
	}
}

function odejmij (){
	if(liczba >= 1){
		liczba-=1;
		koszt-=300.00;
		document.getElementById("ile").innerHTML= liczba;	
		document.getElementById("cena").innerHTML= koszt + "$";	
		document.getElementById("subtotal").innerHTML="$" + (koszt + koszt2);
		document.getElementById("total").innerHTML="$" + (koszt + koszt2 + shipping)
		document.getElementById("koszyk").innerHTML=liczba + liczba2;
	}
}

function dodaj2 (){
	if(liczba2 >= 0){
		liczba2+=1
		koszt2+=300.00;
		document.getElementById("ile2").innerHTML= liczba2;	
		document.getElementById("cena2").innerHTML= koszt2 + "$";	
		document.getElementById("subtotal").innerHTML="$" + (koszt + koszt2);
		document.getElementById("total").innerHTML="$" + (koszt + koszt2 + shipping)
		document.getElementById("koszyk").innerHTML=liczba + liczba2;
	}
}

function odejmij2 (){
	if(liczba2 >= 1){
		liczba2-=1;
		koszt2-=300.00;
		document.getElementById("ile2").innerHTML= liczba2;	
		document.getElementById("cena2").innerHTML= koszt2 + "$";
		document.getElementById("subtotal").innerHTML="$" + (koszt + koszt2);
		document.getElementById("total").innerHTML="$" + (koszt + koszt2 + shipping)
		document.getElementById("koszyk").innerHTML=liczba + liczba2;
	}
}
