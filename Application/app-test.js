module( "Example Unit Test" );


test('Test For Divide 1', function() {
    equal(divide(1,1), 1, "")

});


test('Test For Divide 2', function() {
    equal(divide(4,2), 2, "")

});

test('Test For Divide 3', function() {
    equal(divide(2,0), "Infinity", "")

});

test('Test For Reverse String 1', function() {
    equal(reverseString("Test"), "tseT", "")

});

test('Test For Reverse String 2', function() {
    equal(reverseString("Hello World"), "dlroW olleH", "")

});

test('Test For Min Values', function() {
	
	var arr = [2,3,4,6,9];
	
    equal(findMinValue(arr), 2, "")

});

test('Find distinct values', function() {
	
	var arr = [2,4,4,6,9,9];
	var expectedArr = [2,4,6,9];
	
    deepEqual(findDistinctValues(arr), expectedArr, "")

});


test('Remove fruits', function() {
	
	var arr = ["apple","orange","banana","grapes"];
	var removeArr = ["apple","orange"];
	var expectedArr = ["banana","grapes"];
	
   deepEqual(removeFruits(arr,removeArr), expectedArr, "")

});

test('Push simple object to array', function() {
	
	var arr = ["apple","orange","banana","grapes"];
	var pushElement = "pineapple";
	var expectedArr = ["apple","orange","banana","grapes","pineapple"];
	
   deepEqual(pushOntoArray(arr,pushElement), expectedArr, "")

});

test('Push array object to array', function() {
	
	var arr = ["apple","orange","banana","grapes"];
	var pushElement = ["pineapple"];
	var expectedArr = ["apple","orange","banana","grapes","pineapple"];
	
   deepEqual(pushOntoArray(arr,pushElement), expectedArr, "")

});

test('Split string using comma', function() {
	
	var arr = "apple,orange,banana,grapes";
	var expectedArr = ["apple","orange","banana","grapes"];
	
   deepEqual(splitListStrUsingComma(arr), expectedArr, "")

});

test('Sum of variable arguments', function() {
		
   equal(sum(1,2,3,4), 10, "")

});

test('Contains space or not 1', function() {
		
   ok(isOnlyWhitespace(" "), "")

});

test('Contains space or not 2', function() {
		
   ok(!isOnlyWhitespace(" test "), "")

});


