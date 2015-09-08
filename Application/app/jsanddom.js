 // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }
	 
     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        
		return str.split('').reverse().join('');
		
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        
		return Math.min.apply( Math, values );
		
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         
		 var arr =  values.slice().sort(function(a,b){return a > b})
		 .reduce(function(a,b){if (a.slice(-1)[0] !== b) a.push(b);return a;},[])
			 
		
		return arr;
		 
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
       
	   for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        console.log("FizzBuzz");
    } else {
        if( x % 3 == 0 ) {
            console.log("Fizz");
        }
        if( x % 5 == 0 ) {
            console.log("Buzz");
        }
    }
  
}
}

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     
	 function removeFruits(fruits, fruitsToRemove) {
       
	   for(var i = fruits.length-1; i--;){
	   
		 for (var j = 0; j < fruitsToRemove.length; j++) {
		 
				if (fruits[i] === fruitsToRemove[j]) fruits.splice(i, 1);
		 
		 }
	   
	   }

	   return fruits;
	   
	   
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     
	 function pushOntoArray(array, toPush) {
        
		  var s = typeof toPush;
		  
		    if (s === 'string' ||s === 'object') {
			
				if (toPush) {
				
					if (toPush instanceof Array) {
						
						for(i = 0 ; i < toPush.length ; i++) {
							
							array.push(toPush[i]);
							
						}
						
					}
					
					else {
					
						array.push(toPush);
					
					}
			
			} 
			
			}
			
			return array;
		
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
		
		var res = [];
         
		 if(sourceStr.length==0) {
		 
		 return [];
		 
		 }
		 
		 else {
		 
		 res = sourceStr.split(",");
		 
		 }
		 
		 
		 return res;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        
		var sum = 0;
		
		  for(var i = 0; i < arguments.length; i++) {
		  
				sum += arguments[i];
		  
		  }
		  
		  return sum;
		
		
     }
	 
	 function trim(stringToTrim) {
		 
		return stringToTrim.replace(/^\s+|\s+$/g,"");
	}	

	function ltrim(stringToTrim) {
		
		return stringToTrim.replace(/^\s+/,"");
		
	}

	function rtrim(stringToTrim) {
		
		return stringToTrim.replace(/\s+$/,"");
		
	}

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
		 
		 var containsSpace = false;
		 
		 if(trim(ltrim(rtrim(sourceStr)))=="") {
			 
			 containsSpace = true;
			 
		 }
        
		
		
		return containsSpace;
		
     }