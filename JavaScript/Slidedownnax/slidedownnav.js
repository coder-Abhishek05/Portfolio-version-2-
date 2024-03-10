window.onscroll = function() {
	scroll()
};
function scroll() {
	if (document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20) {
		document.getElementById("nav-bar").style.top = "5px";
	}
	else {
		document.getElementById("nav-bar").style.top= "-60px";
	}
}
