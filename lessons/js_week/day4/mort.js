var EMI_TXT,TIME_TXT,LOAN,INTEREST_TXT,EMI,LOAN,INTEREST_RATE,TIME_M,L_AM;



function findemi()
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


function findt()
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
function findloan()
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
