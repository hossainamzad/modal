$(document).ready(function(){

		$(".modal").hide();
		$("#myButton").on("click", function(){

			$(".modal").show();

		});

		$(".close").on("click",function(){

			$(".modal").hide();

		});
		$("p").html("Hello World.");






});