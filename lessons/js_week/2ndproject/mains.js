(function main()
{
  var div_counter=0;
  var z_index=1;
  
  document.body.id='body';

  function createelements(a)
  {

    console.log(a);

  	var i=0,num_check;
     
      num_check=a.number;
       	 if(isNaN(num_check))
       	 num_check=0;
       while(num_check>-1)
       {
       	var element=document.createElement(a.ElementType);

       for(i=2;i<Object.keys(a).length;i++)
       {

       	    var key_name=Object.keys(a)[i];
       	    if(typeof(a[key_name])=="object")
       	    {
       	    	element[key_name]=a[key_name][num_check];
       	    }
       	    else
       	    {
       	    	element[key_name]=a[key_name];
       	    }



       }
  document.getElementById(a.parent).appendChild(element);
  num_check--;

    }
  }
  // ADDING EVENT LISTENERS


 function addlistening(a)
 {
  document.getElementById(a.id).addEventListener(a.on,a.func);
 }

function addstyles(className,Attributes)
{

    var i,j=0,elements;
    elements=document.getElementsByClassName(className);
    console.log(elements);
   for(i=0;i<elements.length;i++)
   {
    for(j in Attributes)
     {
        console.log(j);
        console.log(Attributes[j]);

      elements[i].style[j]=Attributes[j];
     }
   }
}


 //CREATING ALL THE ELEMENTS AND ADDING STYLE
createelements({ElementType:"div",parent:"body",id:"div1",className:"class1"});
createelements({ElementType:"input", parent:"div1",type:"radio",name:"s",className:"radio",id:"radio3"});
createelements({ElementType:"label",parent:"div1",id:"label3",className:"label",innerHTML:"Mortgauge calculator"});
createelements({ElementType:"input", parent:"div1",type:"radio",name:"s",className:"radio",id:"radio2"});
createelements({ElementType:"label",parent:"div1",id:"label2",className:"label",innerHTML:"Date calculator"});
createelements({ElementType:"input", parent:"div1",type:"radio",name:"s",className:"radio",id:"radio1"});
createelements({ElementType:"label",parent:"div1",id:"label1",className:"label",innerHTML:"Basic calculator"});


addstyles("class1",{position:"relative",left:"0px",right:"0px"});
addstyles("label",{marginRight:"10px"});
addstyles("radio",{marginRight:"10px"});
createBasicCalci();
createCalendar();
createmort();



addlistening({id:"radio1",func:toggle,on:"click"});

addlistening({id:"radio2",func:toggle,on:"click"});

addlistening({id:"radio3",func:toggle,on:"click"});


function toggle(e)
  {

       var a=document.getElementById("calci_wrapper1"),b=document.getElementById("calci_wrapper2"),c=document.getElementById("calci_wrapper3");
       var x=e.currentTarget.id;
        if(x=="radio1")
        {
        	a.style.visibility="visible";
        	b.style.visibility="hidden";
        	c.style.visibility="hidden";

        }
	    else if(x=="radio2")
	    {
          a.style.visibility="hidden";
        	b.style.visibility="visible";
        	c.style.visibility="hidden";
        	
	    }

      else if(x=="radio3")
       {
       	  a.style.visibility="hidden";
        	b.style.visibility="hidden";
        	c.style.visibility="visible";
        	
        }
  }
	



















 function createBasicCalci()
  {
  	//inputting all necessary basic calculator inputs

  	
  	createelements({ElementType:"div",parent:"div1",id:"calci_wrapper1",className:"calci_wrapper1"});
  	
  	createelements({ElementType:"div",parent:"calci_wrapper1",id:"buttons",className:"buttons"});
  	createelements({ElementType:"input",parent:"calci_wrapper1",id:"txt1",className:"txt1",type:"text"});
createelements({ElementType:"input",parent:"buttons",number:23,type:"button",className:"bubu",value:["/","=","0",".","*","3","2","1","-","6","5","4","+","9","8","7","%","MOD","CAN","CLS","MR","M-","M+","MC"],id:["/","=","0",".","*","3","2","1","-","6","5","4","+","9","8","7","%","MOD","CAN","CLS","MR","M-","M+","MC"]});
    addstyles("calci_wrapper1",{position:"absolute",top:"80px",borderRadius:"6px",left:"50px",height:"400px",width:"80%",visibility:"hidden",backgroundColor:"#B0B0B0",border:"2px solid black",margin:"0",marginRight:"0"});
    addstyles("txt1",{position:"absolute",top:"5%",left:"2%",borderRadius:"3px",width:"95%",backgroundColor:"#ffffff",height:"50px",textAlign:"right"})

   
    addstyles("buttons",{position:"absolute",top:"25%",left:"11%",width:"80%",margin:"0",border:"0"});
    addstyles("bubu",{position:"relative",float:"left",width:"18%",fontSize:"1.5em",marginRight:"2%",marginBottom:"2%",backgroundColor:"#006666",borderRadius:"15px",boxShadow:"2px-black"});
//end of html and css inputs
 addlistening({id:"/",func:returnvaluefunction,on:"click"});

 addlistening({id:"=",func:returnvaluefunction,on:"click"});

 addlistening({id:"0",func:returnvaluefunction,on:"click"});

 addlistening({id:".",func:returnvaluefunction,on:"click"});

 addlistening({id:"*",func:returnvaluefunction,on:"click"});

 addlistening({id:"3",func:returnvaluefunction,on:"click"});

 addlistening({id:"2",func:returnvaluefunction,on:"click"});

 addlistening({id:"1",func:returnvaluefunction,on:"click"});

 addlistening({id:"-",func:returnvaluefunction,on:"click"});

 addlistening({id:"6",func:returnvaluefunction,on:"click"});

 addlistening({id:"5",func:returnvaluefunction,on:"click"});

 addlistening({id:"4",func:returnvaluefunction,on:"click"});

 addlistening({id:"+",func:returnvaluefunction,on:"click"});

 addlistening({id:"9",func:returnvaluefunction,on:"click"});

 addlistening({id:"8",func:returnvaluefunction,on:"click"});

 addlistening({id:"7",func:returnvaluefunction,on:"click"});

 addlistening({id:"%",func:returnvaluefunction,on:"click"});
 addlistening({id:"MOD",func:returnvaluefunction,on:"click"});

 addlistening({id:"CAN",func:returnvaluefunction,on:"click"});

 addlistening({id:"CLS",func:returnvaluefunction,on:"click"});

 addlistening({id:"MR",func:returnvaluefunction,on:"click"});

 addlistening({id:"M-",func:returnvaluefunction,on:"click"});

 addlistening({id:"M+",func:returnvaluefunction,on:"click"});

 addlistening({id:"MC",func:returnvaluefunction,on:"click"});


 //HOPE IT WILL WORK 



var input_arr=new Array()
var a=document.getElementById('txt1');
var counter=(a.value.length>0)?2:3;
function aleartfunction()
{  
    var index,lastindex;
    a.value='';
    var memory=0;
    alert("Learn To Use Mouse!!!");
   
    a.value='';
    a.value=a.value.slice(a.value.length);
    
  
}
function returnvaluefunction(i)
{

  var input=i.currentTarget.id;

var sign;
    var i;
    var init;

 
a=document.getElementById('txt1');

//putting values to console
    //******************************************************************************************************************************************************************
 

    if(input=="+")
    {
    var b=a.value.slice(a.value.length-1,a.value.length);
    if(b=='+'||b=='-'||b=='*'||b=='%'||b=='MOD'||b=='.'||b=='='||b=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
   
    
     a.value=a.value+' '+'+';
    
    }



    


    else if(input=="-")
    {
    var b1=a.value.slice(a.value.length-1,a.value.length)
    console.log(b1);
    if(b1=='+'||b1=='-'||b1=='*'||b1=='%'||b1=='MOD'||b1=='.'||b1=='='||b1=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
  a.value=a.value+' '+'-';
    }



    else if(input=="*")
    {
    var b2=a.value.slice(a.value.length-1,a.value.length)
    
    if(b2=='+'||b2=='-'||b2=='*'||b2=='%'||b2=='MOD'||b2=='.'||b2=='='||b2=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'*';  
    }



    else if(input=="/")
    {
    var b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'/';  
    }



    else if(input=="%")
    {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+"%"
    }



    else if(input=="0")
    {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'0';
    }
    else
    {
      a.value=a.value+'0';
    }

    }



    else if(input==1)
    {
 b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'1';
    }
    else
    {
      b3=a.value.slice(a.value.length-1,a.value.length)
      a.value=Number(b3)*10+1;
    }
  
  
    }



    else if(input==2)
    {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'2';
    }
    else
    {
      a.value=a.value+'2';
    }

    }



    else if(input==3)
    {
  b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'3';
    }
    else
    {
      a.value=a.value+'3';
    }

    }



    else if(input==4)
    {
  b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'4';
    }
    else
    {
      a.value=a.value+'4';
    }

    }



    else if(input==5)
    {
  b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'5';
    }
    else
    {
      a.value=a.value+'5';
    }

    }



    else if(input==6)
    {
  b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'6';
    }
    else
    {
      a.value=a.value+'6';
    }

    }



   else if(input==7)
   {
b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'7';
    }
    else
    {
      a.value=a.value+'7';
    }

   }



  else if(input==8)
   {
  b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'8';
    }
    else
    {
      a.value=a.value+'8';
    }

   }



  else if(input==9)
   {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'9';
    }
    else
    {
      a.value=a.value+'9';
    }

   }



  else if(input==".")
   {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
  a.value=a.value+'.';
   }


 
   else if(input=="%")
  {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'%'
  }



  else if(input=="M")
  {
    b3=a.value.slice(a.value.length-1,a.value.length)
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'MOD';
  }


  else if(input=="CAN")
  {
   
    a.value=a.value.slice(0,a.value.length-1);
 
   }
   else if(input=='CLS')
    {
   a.value=a.value.slice(a.value.length);
    }



  else if(input=="=")
  {
    parsefunction();
  }


  else if(input=="MR")
   {
      
   }


   else if(input="MC")
   {
       memory=0;
   }


   else if(input="M-")
   {

   }


   else if(input="M+")
   {
     
   }


//******************************************************************************************************************************************************************
//end of putting value on console
/*
  input_arr=a.value.split(' ');
  console.log(input_arr);

while(input_arr.length>=counter)
{
  
  //for division***********************************************************************************************************************************************

if(input_arr[1]=='/')
{
index=input_arr.indexOf('/');
  console.log(index);
  init=calculate(input_arr[index-1],'/',input_arr[index+1]);
  input_arr.splice(index-2,3);
  console.log(input_arr);
  
}
//*********************************************************************************************************************************************************



//multiplication*************************************************************************************************************************************************
else if(input_arr[1]=='*')
{
   index=input_arr.indexOf('*');
  console.log(input_arr);
  init=calculate(input_arr[index-1],'*',input_arr[index+1]);
   input_arr.splice(index-2,3);
    console.log(input_arr);
 
}
//*************************************************************************************************************************************************************





//checking for plus***************************************************************************************************************************************
else if(input_arr[1]=='+')
{
  index=input_arr.indexOf('+');
  init=calculate(input_arr[index-1],'+',input_arr[index+1]);
   input_arr.splice(index-2,3);
    console.log(input_arr);
}

//************************************************************************************************************************************************************


//checking for minus  ***********************************************************************************************************************************************
else if(input_arr[1]=='-')
{
  index=input_arr.indexOf('-');
  init=calculate(input_arr[index-1],'-',input_arr[index+1]);
   input_arr.splice(index-2,3);
    console.log(input_arr);
}
//***************************************************************************************************************************************************************


}
*/
}

function parsefunction()
{
  var sign;
  var result;
  var s=new String();
  s=a.value.slice(0,a.value.length);
  console.log(s);
  input_arr=s.split(' ');
  console.log(input_arr);
 
while(input_arr.length)
{
  if(input_arr.length==1)
  {
    break;
  }
  console.log(input_arr.length);
  for(sign=0;sign<input_arr.length;sign++)
  {
    while(input_arr[sign]=='/')
    {
       result=Number(input_arr[sign-1])/Number(input_arr[sign+1]);
       input_arr.splice(sign-1,3,result);
    }  
    while(input_arr[sign]=='MOD')
   {
     result=Number(input_arr[sign-1]) % Number(input_arr[sign+1]);
       input_arr.splice(sign-1,3,result);

   }
    while(input_arr[sign]=='*')
    {
      result=Number(input_arr[sign-1])*Number(input_arr[sign+1]);
       input_arr.splice(sign-1,3,result);
    }
    while(input_arr[sign]=='+')
    {
       result=Number(input_arr[sign-1])+Number(input_arr[sign+1]);
       input_arr.splice(sign-1,3,result);
    }
    while(input_arr[sign]=='-')
    {
       result=Number(input_arr[sign-1])-Number(input_arr[sign+1]);
       input_arr.splice(sign-1,3,result);
    }
  
   }



  
}
 a.value=a.value.slice(a.value.length)+input_arr[0];

  


}





/*

function calculate(left_arg,method,right_arg)
{ 

 la=Number(left_arg);
 ra=Number(right_arg);
var sum;



  var a=document.getElementById('t_box');

     if(method=='+')
     {
      sum=0;
      sum=la+ra;
      a.value=a.value.slice(a.value.length)+sum.toString();
      return sum;
     
     }
       else if(method=='*')
     {
      sum=1;
      sum*=la*ra;
      a.value=a.value.slice(a.value.length)+sum.toString();
     return sum;
      
     }
       else if(method=='/')
     {
       sum=1;
       sum*=la/ra;
       a.value=a.value.slice(a.value.length)+sum.toString();
       return sum;
        console.log(sum);
     }
      else if(method=='-')
     {
       sum=0;
      sum+=la-ra;
      a.value=a.value.slice(a.value.length)+sum.toString();
      return sum;
       console.log(sum);
     
     }
}
*/




}


function createCalendar()
{


   createelements({ElementType:"div",parent:"div1",id:"calci_wrapper2",className:"calci_wrapper2"});
   createelements({ElementType:"span",parent:"calci_wrapper2",number:8,id:["span8","span22","span7","span6","span5","span4","span3","span2","span1"],className:["span8","span22","span7","span6","span5","span4","span3","span2","span1"]});
   createelements({ElementType:"h2",parent:"span1",innerHTML:"ENTER TWO DATES TWO GET DIFFERENCE"});
   createelements({ElementType:"input", parent:"span1",number:1,type:"date",id:["2_date","1_date"]});
   createelements({ElementType:"input",parent:"span2",type:"button",value:"GET DIFFERNCE OF DATE",id:"button1"});
   createelements({ElementType:"input" ,parent:"span3",id:"res",type:"text",width:"300"});
   createelements({ElementType:"h2",parent:"span4",innerHTML:"ENTER TWO TIMES TWO GET DIFFERENCE"});
   createelements({ElementType:"input",parent:"span5",number:1,type:"text",id:["min1","hr1"],placeholder:["time1 minute","time1 hour"]});
   createelements({ElementType:"input",parent:"span5",type:"radio",value:"AM",id:"AP2",name:"s"});
   createelements({ElementType:"label",parent:"span5",innerHTML:"AM"});
   createelements({ElementType:"input",parent:"span5",type:"radio",value:"PM",id:"AP1",name:"s"});
   createelements({ElementType:"label",parent:"span5",innerHTML:"PM"});
   createelements({ElementType:"input",parent:"span6",number:1,type:"text",id:["min2","hr2"],placeholder:["time2 min","time2 hour"]});

   createelements({ElementType:"input",parent:"span6",type:"radio",value:"AM",id:"AP4",name:"f"});
   createelements({ElementType:"label",parent:"span6",innerHTML:"AM"});
   createelements({ElementType:"input",parent:"span6",type:"radio",value:"PM",id:"AP3",name:"f"});
   createelements({ElementType:"label",parent:"span6",innerHTML:"PM"});

   createelements({ElementType:"input",parent:"span7",type:"button",value:"GET TIME DIFFERENCE",id:"button2"});
   createelements({ElementType:"input",parent:"span22",number:1,type:"text",id:["res_min","res_h"],placeholder:["result minute","result hour"]});
   createelements({ElementType:"h2",parent:"span8",innerHTML:"ENTER DATE/TIME AND TIME DIFFERENCE TO GET RESULT DATE"});
   createelements({ElementType:"input",parent:"span8",type:"date",id:"day"});
   createelements({ElementType:"label",parent:"span8",innerHTML:"HOUR OF DATE"});
   createelements({ElementType:"input",parent:"span8",id:"hour"});
   createelements({ElementType:"label",parent:"span8",innerHTML:"MINUTE OF DATE"});
   createelements({ElementType:"input",parent:"span8",id:"min"});
   createelements({ElementType:"label",parent:"span8",innerHTML:"DIFFER BY TIME"});
   createelements({ElementType:"input",parent:"span8",number:1,placeholder:["min","hour"],id:["m_shift","h_shift"]});
   createelements({ElementType:"input",parent:"span8", type:"button",value:"GET THE RESULT TIME",id:"button3"});
   createelements({ElementType:"input",type:"text",parent:"span8",id:"res_date"});



   addstyles("calci_wrapper2",{ position:"relative",borderRadius:"6px",top:"150px",left:"0px",height:"800px",width:"1800px",visibility:"hidden",border:"4px solid black"});
   addstyles("div2",{position:"relative",top:"100px",left:"100px",height:"600px",width:"1600px",border:"2px  solid black",borderRadius:"20px",textAlign:"center"});
   addstyles("span1",{position:"absolute",top:"60px",left:"330px"});
   addstyles("span2",{position:"absolute",top:"180px",left:"360px"});
   addstyles("span3",{position:"absolute",top:"230px",left:"330px",width:"300px"});
   addstyles("span4",{position:"absolute",top:"380px",left:"330px"});
   addstyles("span5",{position:"absolute",top:"450px",left:"330px"});
   addstyles("span6",{position:"absolute",top:"480px",left:"330px"});
   addstyles("span7",{position:"absolute",top:"520px",left:"450px"});
   addstyles("span22",{position:"absolute",top:"550px",left:"330px"});
   addstyles("span8",{position:"absolute",top:"580px",left:"130px",padding:"10px"});
   addlistening({id:"button1",func:eval_Date,on:"click"});
   addlistening({id:"button2",func:eval_time,on:"click"});
   addlistening({id:"button3",func:shift,on:"click"});




   function eval_Date(e)
{
  var date1=document.getElementById('1_date');
  var date2=document.getElementById('2_date');
  var res=document.getElementById('res');
  var Date1=new Date(date1.value);
  var Date2=new Date(date2.value);

var d1=Date1.getTime();
var d2=Date2.getTime();
var result=Math.abs(d1-d2);
var y1=Date1.getYear();
var y2=Date2.getYear();
var noofdays=result/(3600000*24);
var no_of_years=noofdays/365;
var noofdays=noofdays%365;
var no_of_months=noofdays/30;
var no_of_days=noofdays%30;
res.value=Math.floor(no_of_years)+ " years " + Math.floor(no_of_months) + " months " + Math.floor(no_of_days) +" days ";
console.log(no_of_years);
console.log(no_of_months);
console.log(no_of_months);
}
function eval_time()
{

}


function eval_time(e)
{
  var h1=document.getElementById('hr1');
  var h2=document.getElementById('hr2');
  var ap1=document.getElementById('AP1');
  var ap2=document.getElementById('AP2');
  var ap3=document.getElementById('AP3');
  var ap4=document.getElementById('AP4');
  var m1=document.getElementById('min1');
  var m2=document.getElementById('min2');
  var res_h=document.getElementById('res_h');
  var res_min=document.getElementById('res_min');
  var hour1;
  var minu1=Number(m1.value);
  var minu2=Number(m2.value);
  var hour2;

    

  if(ap1.checked)
  {
    if(Number(h1.value)!=12)
    {
    hour1=Number(h1.value)+12;
    console.log(hour1);
    console.log('hi');
      }
      else
      {
        hour1=12;
      }
   }
  else if(ap2.checked)
  {
    if(h1.value==12){
      hour1=0;
    }
    else
    {
    hour1=Number(h1.value);
    console.log(hour1);
    console.log("hii1")
      }
}


    if(ap3.checked)
  {
    if(Number(h2.value)!=12)
    {
    hour2=Number(h2.value)+12;
    console.log(hour2);
    console.log('hi');
      }
      else
      {
        hour2=12;
      }
  }
  else if(ap4.checked)
  {
    if(h2.value==12){
      hour1=0;
    }
    else
    {
    hour2=Number(h2.value);
    console.log(hour2);
    console.log("hii1")
      }
  }

  
  var int_min=minu2-minu1;
  var int_hr=hour2+(24-hour1);

  if(int_min<0)
  {
    res_min.value=int_min+60;
    res_h.value=int_hr-1;
  }
  else
  {
    res_min.value=int_min;
    res_h.value=int_hr;
  }

  
 }

function shift(e)
{

  var d1=document.getElementById("day");
  var h1=document.getElementById("hour");
  var m1=document.getElementById("min");
  var th1=document.getElementById("h_shift");
  var tm1=document.getElementById("m_shift");

  var date=new Date(d1.value);
  var mil_day=date.getTime();
  var mil_day_time=(h1.value*3600+m1.value*60)*1000;
  var mil_time1=mil_day+mil_day_time;


  var time_shift=(th1.value*3600+tm1.value*60)*1000;
  var res_time=mil_time1+time_shift;
  var res_date=new Date(res_time);
  var dd=document.getElementById("res_date");
  dd.value=res_date;


}

}

function createmort()
{

createelements({ElementType:"div",parent:"div1",id:"calci_wrapper3",className:"calci_wrapper3"});
createelements({ElementType:"span",parent:"calci_wrapper3",number:1,id:["span12","span11"],className:["span12","span11"]});
createelements({ElementType:"input",parent:"span11",number:3,placeholder:["LOAN AMOUNT","INTEREST RATE","TIME IN MONTHS","EMI AMOUNT"],id:["4_t","3_t","2_t","1_t"],className:["4_t","3_t","2_t","1_t"]});
createelements({ElementType:"input",parent:"span12",number:2,type:"button",id:["button13","button12","button11"],className:["button13","button12","button11"],value:["FIND LOAN","FIND TIME","FIND EMI"]});
addstyles("calci_wrapper3",{position:"absolute",top:"100px",left:"100px",height:"500px",width:"900px",border:"4px solid black",borderRadius:"7px",visibility:"hidden"});
addstyles("span11",{position:"absolute",top:"150px",left:"140px",height:"70px",width:"800px"});
addstyles("span12",{position:"absolute",top:"230px",left:"140px",width:"200px"});
addstyles("1_t",{marginRight:"5px",height:"80px"});
addstyles("2_t",{marginRight:"5px",height:"80px"});
addstyles("3_t",{marginRight:"5px",height:"80px"});
addstyles("4_t",{marginRight:"5px",height:"80px"});
addstyles("button11",{marginTop:"10px",height:"50px",width:"150px",borderRadius:"3px"});
addstyles("button12",{marginTop:"10px",height:"50px",width:"150px",borderRadius:"3px"});
addstyles("button13",{marginTop:"10px",height:"50px",width:"150px",borderRadius:"3px"});


addlistening({id:"button11",func:findemi,on:"click"});
addlistening({id:"button12",func:findt,on:"click"});
addlistening({id:"button13",func:findloan,on:"click"});



//ALL LISTENING FUNCTIONS
var EMI_TXT,TIME_TXT,LOAN,INTEREST_TXT,EMI,LOAN,INTEREST_RATE,TIME_M,L_AM;



function findemi(e)
{
  EMI_TXT=document.getElementById('1_t');
TIME_TXT=document.getElementById('2_t');
INTEREST_TXT=document.getElementById('3_t');
L_AM=document.getElementById('4_t');

EMI=Number(EMI_TXT.value);
TIME_M=Number(TIME_TXT.value);
INTEREST_RATE=Number(INTEREST_TXT.value);
LOAN=Number(L_AM.value);
console.log(EMI);
console.log(TIME_M);
console.log(INTEREST_RATE);

var a=Math.pow((1+(INTEREST_RATE/1200)),TIME_M);
console.log(a);
var b=INTEREST_RATE/1200;
console.log(b);
var c=EMI/(EMI-((LOAN*TIME_M)/100));
console.log(c);



  EMI=LOAN *a*b/(a-1);
  console.log(EMI);
    EMI_TXT.value=Math.round(EMI);
}


function findt(e)
{

EMI_TXT=document.getElementById('1_t');
TIME_TXT=document.getElementById('2_t');
INTEREST_TXT=document.getElementById('3_t');
L_AM=document.getElementById('4_t');

EMI=Number(EMI_TXT.value);
TIME_M=Number(TIME_TXT.value);
INTEREST_RATE=Number(INTEREST_TXT.value);
LOAN=Number(L_AM.value);
console.log(EMI);
console.log(TIME_M);
console.log(INTEREST_RATE);

var a=Math.pow((1+(INTEREST_RATE/1200)),TIME_M);
console.log(a);
var b=INTEREST_RATE/1200;
console.log(b);
var d=EMI-(LOAN*b);
console.log(d);
var c=EMI/ d;     
console.log(c);
 TIME_M=Math.log(c)/Math.log(1+b);
 console.log(TIME_M);
 TIME_TXT.value=Math.round(TIME_M);
}
function findloan(e)
{
EMI_TXT=document.getElementById('1_t');
TIME_TXT=document.getElementById('2_t');
INTEREST_TXT=document.getElementById('3_t');
L_AM=document.getElementById('4_t');

EMI=Number(EMI_TXT.value);
TIME_M=Number(TIME_TXT.value);
INTEREST_RATE=Number(INTEREST_TXT.value);
LOAN=Number(L_AM.value);
console.log(EMI);
console.log(TIME_M);
console.log(INTEREST_RATE);

var a=Math.pow((1+(INTEREST_RATE/1200)),TIME_M);
console.log(a);
var b=INTEREST_RATE/1200;
console.log(b);
var c=EMI/(EMI-((LOAN*TIME_M)/100));
console.log(c);
  LOAN=EMI*((a-1)/(a*b));
  console.log(LOAN);
  var hh=Math.round(LOAN);
  L_AM.value=hh;
}
}




})();