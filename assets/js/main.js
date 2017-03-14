window.addEventListener("load",function(){
	var popup = document.getElementById("myPopup");
	var a = document.getElementsByClassName("popup");

	a.addEventListener("click",function(){
		popup.classList.toggle("show");
	});
});