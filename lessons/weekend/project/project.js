function jump(i)
{
	var modal1=document.getElementById('hiddenmodal');
	var shownbox=document.getElementById('hiddendialog');

modal1.style.visibility=(modal1.style.visibility=="visible")?"hidden":"visible";
console.log(modal1);
if(i=='image1')
{
	shownbox.style.visibility=(shownbox.style.visibility=="visible")?"hidden":"visible";
	var image=document.getElementById('image1');
	shownbox.innerHTML=image.innerHTML;
}

}
