

			function s(tab)
			{
				var a=document.getElementById('left');
				var b=document.getElementById('right');

						if(tab=='right')
							{
								document.getElementById('wrapper1').style.visibility='visible';
    							document.getElementById('leftinside').style.visibility='hidden';
    							document.getElementById('rightinside').style.visibility='hidden';
    							document.getElementById('right').style.background='#e4efff'
    							document.getElementById('left').style.background='#ffffff'
    							document.getElementById('learn').style.visibility='hidden';
    							document.getElementById('right').style.color='#09569d';
    							b.style.borderBottom='1px solid #e4efff';
    							a.style.borderBottom='0px solid #e4efff'
   
    							a.style.top="-52px"
    							b.style.top="-51px"
   								a.style.marginTop="-1px"



    						}
    					else
    						{
    							document.getElementById('wrapper1').style.visibility='hidden';
    							document.getElementById('leftinside').style.visibility='visible';
    							document.getElementById('rightinside').style.visibility='visible';
    							document.getElementById('right').style.background='#ffffff'
    							document.getElementById('left').style.background='#e4efff'
    							document.getElementById('learn').style.visibility='visible';
    							document.getElementById('left').style.color='#09569d'
    							b.style.borderBottom='0px solid #BDCDEE';
    							a.style.borderBottom='1px solid #e4efff'
  								a.style.top="-51px";
    							b.style.top="-52px";
   								b.style.marginTop="-1px"
    						}
			}
			
			
			function jsonval()
			{
				
								var interest="";
								var name=document.myform.name.value;
								var email=document.myform.em.value;
								var sex=document.myform.sex.value;

                                var inputElements = document.getElementsByClassName('checkbox');
									for(var i=0; inputElements[i]; ++i)
										{
	      	   								if(inputElements[i].checked)
		   										{
		  
	           										interest= interest+inputElements[i].value+",";
	           										//console.log(interest);		

	           									}
										}
										


								
								var country=document.myform.country.value;
								var address=document.myform.add.value;
								var object={};
								object.name=name;
								object.email=email;
								object.sex=sex;
								object.country=country;
								object.address=address;
								object.interest=interest;
							    object.__proto__=null;
							    JSON.stringify(object);
							    console.log(object);
							
			}






