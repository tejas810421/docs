window.onscroll = function(){scrollFunction()};
function scrollFunction(){
	if(document.body.scrollTop >1 || document.documentElement.scrollTop > 1)
	{
		document.getElementById("specialBar").style.top ="0;"
	}
	else
	{
		document.getElementById("specialBar").style.top="-100px";
	}
}
