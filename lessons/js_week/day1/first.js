
      var counter_div;
      var output=[];
      var secondinput=[];
      var firstinput=[];



function creatediv(process)
{
	var a=document.getElementById('output');
	


//removing the created elements

while(a.firstChild)
{
      a.removeChild(a.firstChild);
}



//for clicking addition
if(process=='addition')
{
     //creating divs



	for(counter_div=0;counter_div<23;counter_div++)
  {
      var bacchadiv=document.createElement('div');
      bacchadiv.setAttribute("id","childdiv_Add"+counter_div);
      bacchadiv.setAttribute("class","bacchadiv_ADD");
      bacchadiv.style.height="80px";
      bacchadiv.style.width="200px";
      bacchadiv.style.position="relative";
    
      bacchadiv.style.top="30px";
      bacchadiv.style.border="0px solid white";
      bacchadiv.style.float="left";
      bacchadiv.style.marginRight="5px";
      bacchadiv.style.marginBottom="5px";



      document.getElementById('output').appendChild(bacchadiv);


     // creating first input

        
       
      firstinput[counter_div]=Math.floor(Math.random()*100);

      var firstnumber=document.createElement('input');

      firstnumber.setAttribute("type","text");
      firstnumber.setAttribute("id","first_in");
      firstnumber.setAttribute("value",firstinput[counter_div]);



//style
      firstnumber.style.position="relative";
      firstnumber.style.Width="110%";
      firstnumber.style.Height="33.33%";

       firstnumber.style.marginLeft="5px";
//style


      
      bacchadiv.appendChild(firstnumber);

  //creating second input
   
     secondinput[counter_div]=Math.floor(Math.random()*100);

      var secondnumber=document.createElement('input');
      secondnumber.setAttribute("id","second_in");

       secondnumber.setAttribute("type","text");
       secondnumber.setAttribute("value","+"+secondinput[counter_div]);

//style
       secondnumber.style.position="relative";
       secondnumber.style.Width="100%";
       secondnumber.style.Height="33.33%";
       secondnumber.style.marginLeft="5px";
//style
       bacchadiv.appendChild(secondnumber);
       

//creating outputbox 

     
     output[counter_div]=firstinput[counter_div]+secondinput[counter_div];
     console.log(output[counter_div]);


      var inputbox=document.createElement('input');
      inputbox.setAttribute("type","text");
      inputbox.setAttribute("id",counter_div);
      inputbox.setAttribute("class","outputbox")
      inputbox.setAttribute("onkeyup","check(this)");

//style
      inputbox.style.position="relative";
      inputbox.style.Width="100%";

      inputbox.style.Height="33.33%";
      inputbox.style.marginLeft="5px";
//style
      

      bacchadiv.appendChild(inputbox);

     }
}


//for substraction

else if(process=='subs')
{
     
	 
      for(counter_div=0;counter_div<23;counter_div++)
      {
      var bacchadiv=document.createElement('div');
      bacchadiv.setAttribute("id","childdiv_Add"+counter_div);
      bacchadiv.setAttribute("class","bacchadiv_ADD");
//style
      bacchadiv.style.height="80px";
      bacchadiv.style.width="200px";
      bacchadiv.style.position="relative";
    
      bacchadiv.style.top="30px";
      bacchadiv.style.border="0px solid white";
      bacchadiv.style.float="left";
      bacchadiv.style.marginRight="5px";
      bacchadiv.style.marginBottom="5px";
//style



      document.getElementById('output').appendChild(bacchadiv);


     // creating first input

      
       
      firstinput[counter_div]=Math.floor(Math.random()*100);

      var firstnumber=document.createElement('input');
      firstnumber.setAttribute("id","first_in");

      firstnumber.setAttribute("type","text");
      firstnumber.setAttribute("value",firstinput[counter_div]);
//style

      firstnumber.style.position="relative";
      firstnumber.style.Width="110%";
      firstnumber.style.Height="33.33%"
       firstnumber.style.marginLeft="5px";
//style
      
      bacchadiv.appendChild(firstnumber);

  //creating second input
    
     secondinput[counter_div]=Math.floor(Math.random()*100);

      var secondnumber=document.createElement('input');
       secondnumber.setAttribute("id","second_in");
       secondnumber.setAttribute("type","text");
       secondnumber.setAttribute("value",-secondinput[counter_div]);
//style
       secondnumber.style.position="relative";
       secondnumber.style.Width="100%";
       secondnumber.style.Height="33.33%";
       secondnumber.style.marginLeft="5px";
//style
       bacchadiv.appendChild(secondnumber);
     


//creating outputbox 
        
      output[counter_div]=firstinput[counter_div]-secondinput[counter_div];

      var inputbox=document.createElement('input')
      inputbox.setAttribute("type","text");
      inputbox.setAttribute("id",counter_div);

      inputbox.setAttribute("onkeyup","check(this)");
      inputbox.style.position="relative";
      inputbox.style.Width="100%";

      inputbox.style.Height="33.33%";
      inputbox.style.marginLeft="5px";
      

      bacchadiv.appendChild(inputbox);

     }
}

}





//CHECKING MY OUTPUT 



function check(id_l)
{

var id_e=id_l.id;

if (id_l.createTextRange) {
            var part = id_l.createTextRange();
            part.move("character", 0);
            part.select();
        }else if (id_l.setSelectionRange){
            id_l.setSelectionRange(0, 0);}
        id_l.focus(); 


if(output[id_e]==id_l.value)
{
id_l.style.backgroundColor="green";
}
else if(id_l.value=='')
{
 id_l.style.backgroundColor="white";
}
else
{
      id_l.style.backgroundColor="red";
}
}

	