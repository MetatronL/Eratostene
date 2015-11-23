
var non_prime_display = 1;
var max_n =10;

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
	if( !non_prime_display )
	{
		for(i=2;i<=n;++i)
			if( list[i] )
				_nrContainer.container.push(i),
				document.getElementById("__lista_finala").innerHTML += i + ' ';
	}
	else
	{
		for(i=2;i<=n;++i)
			if( list[i] )
				_nrContainer.container.push(i),
				document.getElementById("__lista_finala").innerHTML += i + ' ';
			else 
				_nrContainer.container.push(i)
	}
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
function btn_non_prime(_this)
{	
	if(non_prime_display)
		$(_this).text("NU"),
		non_prime_display = 0;
	else 
		$(_this).text("DA"),
		non_prime_display = 1;
	
}


function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}