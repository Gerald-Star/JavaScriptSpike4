// If conditional Statement with the boolean value
    // True or False

    function test (myCondition) {
        if (myCondition) {
          return "It was true";
        }
        return "It was false";
        
      }
      
     console.log(test(true)); 
     //test(false);
      


      //EXAMPLE 2

      function testRun (myScore) {
        if (myScore) {
            return "I passed the exam true"
        }
        return "I failed the exam false"
      }
console.log(testRun(true));
// or
console.log(testRun(false));


// EQUALITY OPERATOR COMPARISON ==
//compares/ converts values of the same common type

//EXAMPLE 2
/*
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/

function equalityTest(myVal) {
    if (myVal == 10) {
      return "New Class";
    }
    return "No New Class";
  }

  console.log(equalityTest(10));
  
  /*If myVal is equal to 10, the equality operator
   returns true, so the code in the curly braces will
    execute, and the function will return Equal.
     Otherwise, the function will return Not Equal*/

     //EXAMPLE 2

     /* Add the equality operator to the indicated 
     line so that the function will return the 
     string Equal when val is equivalent to 12.

     */
// Setup EXAMPLE 1
function examScore(val) {
    if (val == 12) { // Change this line
      return "Next Class";
    }
    return "Repeat";
  }
  
  console.log(examScore(10));
  //output Repeat

//EXAMPLE 2
  function classExamScore(val) {
    if (val == "12") { // Change this line
      return "Promoted";
    }
    return "Not Promoted";
  }
  
  console.log(classExamScore("12"));
  //output Promoted


  //EXAMPLE 3
  function classExamScoreNo(val) {
    if (val == "12") { // Change this line
      return "Promoted To Next Class";
    }
    return "Not Promoted To Next Class";
  }
  
  console.log(classExamScoreNo("14"));


  //EXAMPLE 4 Compare to Equality Operator ==

  function testStrictMan(valMan) {
    if (valMan == "7") { // Change this line
      return "Good Job";
    }
    return "Study Hard";
  }
  
  console.log(testStrictMan(7));


  // STRICT OPERATOR
  /* Use the strict equality operator in the if statement 
  so the function will return the string Equal when val 
  is strictly equal to 7.*/


  /*Examples

3 ===  3  // true
3 === '3' // false*/

  // EXAMPLE 1
function testStrict(val) {
    if (val === "7") { // Change this line
      return "Good Student";
    }
    return "Poor Student";
  }
  
  console.log(testStrict(7));


  //EXAMPLE 2 ===

  function testStrictCheck(valCheck) {
    if (valCheck === 10) { // Change this line
      return "Won";
    }
    return "Not Won";
  }
  
  console.log(testStrictCheck(7));


  

  //example another 
  //strict equality operator that returns passed and fail. 

  function testExamScore(student) {
    if (student === 20) {
        return "Passed"; 
    } else
    if (student === "10"){
        return "Another Exam"
    }
    return "No Exam"
  }
  console.log(testExamScore(20));
  console.log(testExamScore("7")); 
  //without the exact gives undefined
  
    

  // Comparinb two data types
  function compareEquality(a, b) {
    if (10 === "10") { // Change this line
      return "Yes";
    }
    return "False";
  }
  console.log(compareEquality(10, "10"));
  // output strict Equality = false

  //Example 2

  function compareDataTypes (c, d) {
    if (10 == "10") {
        return "True";
    }
    return "Not True";
  }

  console.log(compareDataTypes (10 , "10"));
  //output Equality = True


  //TOPIC Inequality Operator

  /*
  inequality operator (!=) is the opposite of the 
  equality operator. It means not equal and returns
   false where equality would return true

1 !=  2    // true <br>
1 != "1"   // false <br>
1 != '1'   // false <br>
1 != true  // false <br>
0 != false // false <br>
  */
//Opposite of equality operator

// Setup

/* Example 
Add the inequality operator != in the if statement 
so that the function will return the string Not Equal 
when val is not equivalent to 99
*/
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testNotEqual(10));


  //EXAMPLE 2

  function retestEqual(val) {
    if (val != "99") { // Change this line
      return "Same";
    }
    return "Not Same";
  }
  
  console.log(retestEqual(10));

  
  //EXAMPLE 3

  function testEqual(val) {
    if (val != "99") { // Change this line
      return "Right";
    }
    return "Not Right";
  }
  
  console.log(testEqual(99));


//EXAMPLE 4

function moreTest(val) {
    if (val != 10) { // Change this line
      return "Good Score";
    }
    return " Bad Score";
  }
  
  console.log(moreTest(10));
//output Match


/* STRICT INEQUALITY OPERATOR
The strict inequality operator (!==)
 is the logical opposite of the strict equality operator
*/
//Examples
/*
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true


Add the strict inequality operator to the if statement
 so the function will return the string Not Equal when 
 val is not strictly equal to 17
*/

// Example 1
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "True";
    }
    return "false";
  }
  
   console.log(testStrictNotEqual(17));
  //output False

//Example 2
  function testStrict(val) {
    if (val !== "17") { // Change this line
      return "True";
    }
    return "Not True";
  }
  
  console.log(testStrict(17));
  //output True


