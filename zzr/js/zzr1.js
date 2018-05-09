function showPic(whichpic) { 
	var source=whichpic.getAttribute("href");
	var placeholder =document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text =whichpic.getAttribute("title");
	var descripton = document.getElementById("description");
	description.firstChild.nodeValue =text;}
window.onload = prepareGallery;
function prepareGallery(){
    var bbq=document.getElementById("bq");
    var links=bbq.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
        links[i].onclick=function(){
            showPic(this);
            return false;
        }
    }
}