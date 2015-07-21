

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
 
			function stateenable()
			{
                               var state=new Array();
				               state[1]=("Andra Pradesh|Arunachal Pradesh|Assam|Bihar|Chattisgarh|Goa|Gujrat|Haryana|Himachal Pradesh|jammu and kashmir|jharkhand|karnataka|Madhya Pradeshmanipur|Mizoram|Telengana|Uttar Pradesh|West Bengal");
            	               state[2]=("janakpur|beri|gandaki|karnali|kosi|sagarmata|seti");

				               
                                var selectedCountryIndex = document.getElementById("country").selectedIndex;

                                var stateElement = document.getElementById('state');
                                stateElement.length = 0;
                                stateElement.options[0] = new Option('Select State', '');
                                stateElement.selectedIndex = 0;

                                var state_arr = state[selectedCountryIndex].split("|");

                                for (var i = 0; i < state_arr.length; i++)
                                {
                                   stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
                                }
             }
             function modal(sex)
             {
             	var hiddewindown=document.getElementById("m_wrapper1");
             	var modalwindown=document.getElementsByClassName("popupbox");
             	var Interest=new Array();
             	Interest[0]=("EPL|LEAGUE BBVA| SERIE A |I LEAGUE");
             	Interest[1]=("gsa|ghsdas|dhgjsd");
             	Interest[2]=("hagsa|hjsgj|hshsd");
                    hiddewindown.style.visibility='visible';
                    modalwindown.style.visibility='visible'
                    
                   
                
                }                                

             





            


         




