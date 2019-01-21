function Display(evt, arg1){
	var i, hide;
	hide = document.getElementsByClassName("hide");
	for(i = 0; i < hide.length; i++){
		hide[i].style.display = "none";
	}


  document.getElementById(arg1).style.display = "flex";
}
