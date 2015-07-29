
var input_arr=[];
var a=document.getElementById('t_box');
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
function returnvaluefunction(input)
{
var sign;
    var i;
    var init;
    var b3;

 


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
    var b1=a.value.slice(a.value.length-1,a.value.length);
    console.log(b1);
    if(b1=='+'||b1=='-'||b1=='*'||b1=='%'||b1=='MOD'||b1=='.'||b1=='='||b1=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
  a.value=a.value+' '+'-';
    }



    else if(input=="*")
    {
    var b2=a.value.slice(a.value.length-1,a.value.length);
    
    if(b2=='+'||b2=='-'||b2=='*'||b2=='%'||b2=='MOD'||b2=='.'||b2=='='||b2=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'*';  
    }



    else if(input=="/")
    {
     b3=a.value.slice(a.value.length-1,a.value.length);
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'/';  
    }



    else if(input=="%")
    {
    b3=a.value.slice(a.value.length-1,a.value.length);
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+"%";
    }



    else if(input=="0")
    {
    b3=a.value.slice(a.value.length-1,a.value.length);
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
 b3=a.value.slice(a.value.length-1,a.value.length);
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='='||b3=='/')
    {
    a.value=a.value+' '+'1';
    }
    else
    {
      b3=a.value.slice(a.value.length-1,a.value.length);
      a.value=Number(b3)*10+1;
    }
  
  
    }



    else if(input==2)
    {
    b3=a.value.slice(a.value.length-1,a.value.length);
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
  b3=a.value.slice(a.value.length-1,a.value.length);
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
  b3=a.value.slice(a.value.length-1,a.value.length);
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
  b3=a.value.slice(a.value.length-1,a.value.length);
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
  b3=a.value.slice(a.value.length-1,a.value.length);
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
b3=a.value.slice(a.value.length-1,a.value.length);
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
  b3=a.value.slice(a.value.length-1,a.value.length);
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
    b3=a.value.slice(a.value.length-1,a.value.length);
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
    b3=a.value.slice(a.value.length-1,a.value.length);
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
  a.value=a.value+'.';
   }


 
   else if(input=="%")
  {
    b3=a.value.slice(a.value.length-1,a.value.length);
    if(b3=='+'||b3=='-'||b3=='*'||b3=='%'||b3=='MOD'||b3=='.'||b3=='='||b3=='/')
    {
      a.value=a.value.slice(0,a.value.length-1);
    }
    
    a.value=a.value+' '+'%';
  }



  else if(input=="M")
  {
    b3=a.value.slice(a.value.length-1,a.value.length);
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


   else if(input=="MC")
   {
       memory=0;
   }


   else if(input=="M-")
   {

   }


   else if(input=="M+")
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
  var s;
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
