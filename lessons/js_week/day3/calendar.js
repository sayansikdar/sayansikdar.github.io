function eval_Date()
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
res.value=res.value.slice(res.value.length)+ Math.floor(no_of_years)+" years "+Math.floor(no_of_months)+" months "+Math.floor(no_of_days)+" days ";
}
function eval_time()
{

}


function eval_time()
{
	var h1=document.getElementById('hr1');
	var h2=document.getElementById('hr2');
	var ap1=document.getElementById('AP1');
	var ap2=document.getElementById('AP2');
	var ap3=document.getElementById('AP3');
	var ap4=document.getElementById('AP4');
	var m1=document.getElementById('min1');
	var m2=document.getElementById('min2');
	var res_h=document.getElementById('result');
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

function shift()
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