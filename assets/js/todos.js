/****** USE ON CLICK FOR FUTURE <li> ADD IN ***/
// // Check Off Specific Todos By Clicking
// $("li").click(function() {

// 	/****** LONG WAY, USE CLASS INSTEAD *****/
// 	// console.log($(this).css("color"));
// 	// if ($(this).css("color") === "rgb(128,128,128)") {
// 	// 	$(this).css({
// 	// 		color : "black",
// 	// 		textDecoration: "none"
// 	// 	});
// 	// }
// 	// else {
// 	// 	$(this).css({
// 	// 		color : "gray",
// 	// 		textDecoration: "line-through"
// 	// 	});
// 	// }

// 	// BETTER SOLUTION 
// 	$(this).toggleClass("completed");
// });

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})


/****** USE ON CLICK FOR FUTURE <ul> ADD IN ***/
//  // Click on X to delete Todo
// $("span").click(function(event) {
// 	$(this).parent().fadeOut(500,function() {
// 		$(this).remove(); // *this keyword prefer to li not span
// 	});
// 	event.stopPropagation(); // prevent li, ul, div container click event happen as well
// })


$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove(); // *this keyword prefer to li not span
	});
	event.stopPropagation(); // prevent li, ul, div container click event happen as well
})


$("input[type = 'text']").keypress(function(event) {
	if (event.which === 13) {   // check for enter key
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and append to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	} 
})


$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})
