$(document).ready(function () {
	$("#RightToLeft").on("click", function () {
		$("#slide").animate({
			marginLeft: "0px", // Specify the unit "px"
		}, 500); // Add a speed parameter, e.g., 500 milliseconds

		$(".top").animate({
			marginLeft: "100%",
		}, 500); // Add a speed parameter, e.g., 500 milliseconds
	});

	$("#LeftToRight").on("click", function () {
		$("#slide").animate({
			marginLeft: "50%",
		}, 500); // Add a speed parameter, e.g., 500 milliseconds

		$(".top").animate({
			marginLeft: "0px", // Specify the unit "px"
		}, 500); // Add a speed parameter, e.g., 500 milliseconds
	});
});
