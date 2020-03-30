// SHOW/HIDE DESCRIPTION

$('.main-title').hover(function(){
	$('.desc').css({'opacity':'1'})
}, function(){
	$('.desc').css({'opacity':'0'})
})


// HOVER OVER ACTUAL ARCHIVE

$(document).mousemove(function(e){
	$('.hoverimg').css({'top': e.clientY - 16 - 448, 'left': e.clientX + 16})
})

$('.actual').hover(
	function(){
		$('.hoverimg').css({'display':'block'})
	},
	function(){
		$('.hoverimg').css({'display':'none'})
	}
)


// COLLAPSIBLE BOXES https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// POP UP WINDOW FOR RECORDS

var windowAttr = 'height=650,width=970,left=421,top=151,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes';

$('.records').mousedown(function(){
	window.open('records/index.html','theRecordsInventory', windowAttr)
})