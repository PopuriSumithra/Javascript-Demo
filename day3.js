var a3=[];
var a1=[1,0,2,3,4];
var a2=[3,5,6,7,8,13];
a3=sum(a1,a2);
var n;
n=reverse(123);
function sum(a1,a2)
{
	var i=0;
	var t=0;
	if((a1.lenghth===0) || (a2.length=== 0))
		return "array should not beempty";
	while(i<a1.length&&i<a2.length)
	{
	a3.push(a1[i] +a2[i]);
	i++;
	}
	if( i<a1.length)
	{
		t=i;
		while(t<a1.length)
		{
	   a3.push(a1[t]);
	    t++;
		}
	}
	if( i<a2.length)
	{
		t=i;
		while(t<a2.length)
		{
	   a3.push(a2[t]);
	    t++;
		}
	}
	return a3;
}
function reverse(n1)
{
   var a, result=0;
	while( n1>0)
	{
		a = n1%10;
		result = result*10+a;
		n1=parseInt(n1/10);
	}
	return result;
}
document.write("Sum is:" +a3);
document.write("<br>"+"reverse of given number is:"+n);