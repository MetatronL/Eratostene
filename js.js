// JavaScript Document
var __MAIN_HEADER = "Eratostene's Sieve";
//

var _list = ["MAIN_HEADER"];

function loadText(){
	var index=0;
	for(index = _list.length-1; index >=0 ; --index){
		document.getElementById( _list[index] ).innerHTML = eval('__' + _list[index]);	
	}
	
	
}

function createEratosteneList(n){
	var max_n =10;
	var _this = document.getElementById("elem_container");	
	var inv_n=2;
	var code="";
	for(var i=0;i*max_n<=n;++i){
		code = "<div class='w3-row-padding' >";
		document.getElementById("elem_container").innerHTML += code;
		for(var j=max_n; j && inv_n <=n  ; --j, ++inv_n){
				code = "<div id='dv_"+inv_n+"' class='w3-col  w3-center' style='width:10%;padding-right:10px;' ><p id='el_"+inv_n+"' class='border_1 w3-red ' >"+inv_n+"</p></div>";
				document.getElementById("elem_container").innerHTML += code;	
		}
		code = "</div>";
		document.getElementById("elem_container").innerHTML += code;
	}

}

function _clicked(){
		var n = document.getElementById("nr_input").value;
		if( n < 2 ) 
			document.getElementById("status").innerHTML = "NU ati introdus o valoare valida!" ;
		else
		document.getElementById("status").innerHTML = "" ;
		document.getElementById("lista_finala").innerHTML = " <div id='__lista_finala' >&nbsp</div>"
		document.getElementById("elem_container").innerHTML = "";
		createEratosteneList(n);
		var lst = new Array(n+2);
		for(var i=0;i<=n+1;++i) lst[i] = true;
		
		for(var i = 2; i <= n/2; ++i){
			for(var j=2; i*j <= n; ++j){
				var temp_name = "el_"+i*j;
				document.getElementById(temp_name).className = "border_1";
				document.getElementById(temp_name).style.backgroundColor = "black";
				lst[i*j]=false;
			}
		}
		var __this = document.getElementById("__lista_finala");
		//__this.after("");
		for(var i=2;i<=n;++i)
			if( lst[i] )
			{
				document.getElementById("lista_finala").innerHTML += i + ' ' ;
				
			}
			/*else if(true) document.getElementById("dv_"+i).innerHTML = ""; */
				
}