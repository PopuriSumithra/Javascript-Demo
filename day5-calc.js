			function dis(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		
		//Result Claculation
		function solve() 
		{ 
			var x = document.getElementById("result").value 
			var y = eval(x) 
			document.getElementById("result").value = y 
		} 
		
		//Clear the display Value
		function clr() 
		{ 
			document.getElementById("result").value = "" 
		} 