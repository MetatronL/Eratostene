// JavaScript Document
var __MAIN_HEADER = "Eratostene's Sieve";
//

var _list = ["MAIN_HEADER"];
var non_prime_display = 1;
var max_n =10;

function loadText(){
	var index=0;
	for(index = _list.length-1; index >=0 ; --index){
		document.getElementById( _list[index] ).innerHTML = eval('__' + _list[index]);	
	}
	
	
}


var _nrContainer = 
{
	len:0,
	container:[]
};
var list = [];
function _color(k)
{
	if( !non_prime_display || list[k] )
		return "w3-red";
	return "w3-black";
	
}


function __displayElement(){
	var index=0;
	
	var code = "";
	var nrRow = (_nrContainer.len / max_n);
	for(var i = 1 ; i <=nrRow ; ++i)
	{
		for(var j=0;j<max_n;++j,++index ){
			code = "<div id='dv_"+_nrContainer.container[index]+"' class='w3-col  w3-center' style='width:10%;padding-right:10px;' ><p id='el_"+_nrContainer.container[index]+"' class='border_1 "+_color(_nrContainer.container[index])+" ' >"+_nrContainer.container[index]+"</p></div>";
			document.getElementById('elem_cont').innerHTML += code;
		}
		
	}
	for(var j=0;j<_nrContainer.len % max_n;++j,++index ){
			code = "<div id='dv_"+_nrContainer.container[index]+"' class='w3-col  w3-center' style='width:10%;padding-right:10px;' ><p id='el_"+_nrContainer.container[index]+"' class='border_1 "+_color(_nrContainer.container[index])+" ' >"+_nrContainer.container[index]+"</p></div>";
			document.getElementById('elem_cont').innerHTML += code;
		}
	
}

function __generateNumbers(n){

	_nrContainer.container.length = 0;
	list.length = n+2;
	for(var i=0;i < n+2; ++i) list[i] = 1;
	
	for(var i=2;i<=n/2;++i)
	{
		for(var j=i*2; j<=n; j+=i)
		{
			list[j] = 0;
		}
	}
	for(i=2;i<=n;++i)
		if( list[i] || non_prime_display )
			_nrContainer.container.push(i);
	_nrContainer.len = _nrContainer.container.length;
	
}



function __clicked_()
{
	var n = document.getElementById("nr_input").value;
	if( n < 2 )
	{ 
		document.getElementById("status").innerHTML = "NU ati introdus o valoare valida!" ;
		return ;
	}
	document.getElementById("elem_cont").innerHTML = "";
	document.getElementById("status").innerHTML = "" ;
	document.getElementById("lista_finala").innerHTML = " <div id='__lista_finala' >&nbsp</div>"
	
	
	__generateNumbers(n);
	
	__displayElement();
	
	
}






/*

function createEratosteneList(n){
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
		{ 
			document.getElementById("status").innerHTML = "NU ati introdus o valoare valida!" ;
			return ;
		}
		
		document.getElementById("status").innerHTML = "" ;
		document.getElementById("lista_finala").innerHTML = " <div id='__lista_finala' >&nbsp</div>"
		document.getElementById("elem_container").innerHTML = "";
		if( !non_prime_display ){
			createonlyprime(n);
			return;
		}
		createEratosteneList(n);
		var lst = new Array(n+2);
		for(var i=0;i<=n+1;++i) lst[i] = true;
		
		
		for(var i = 2; i <= n/2; ++i)
		{
			for(var j=2; i*j <= n; ++j)
			{
				var temp_name = "el_"+i*j;
				document.getElementById(temp_name).className = "border_1";
				document.getElementById(temp_name).style.backgroundColor = "black";
				lst[i*j]=false;
			}
		}
		
		
		
		
		for(var i=2;i<=n;++i)
			if( lst[i] )
			{
				document.getElementById("lista_finala").innerHTML += i + ' ' ;
				
			}
			
				
}
*/