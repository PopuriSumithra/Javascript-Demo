  /*document.getElementById("row3").style.backgroundColor='#003F87';*/
  
  

var n1 = document.getElementById("myTable").rows.length;
  var i;
  for(i=1;i<n1;i++)
  
  {
 
var x=document.getElementById("myTable").rows[i].cells.item(2).innerHTML;

var y=document.getElementById("myTable").rows[i].cells.item(1).innerHTML;
var age=document.getElementById("myTable").rows[i].cells.item(4).innerHTML;

  if(x>500)
	  
	  {
		  document.getElementById("myTable").rows[i].cells. item(2).bgColor ='#003F87';
	  }
	  
	   if(y>10000)
	  
	  {
		  document.getElementById("myTable").rows[i].cells. item(1).bgColor ="Green";
	  }
	   if(age>35)
	  
	  {
		  document.getElementById("myTable").rows[i].cells. item(4).bgColor ="Blue";
	  }
	  
      document.getElementById("myTable").rows[i].cells. item(0).bgColor ="gray";
  }	
  
  
	
 