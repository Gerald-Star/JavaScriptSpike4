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
// Setup
function examScore(val) {
    if (val == 12) { // Change this line
      return "Next Class";
    }
    return "Repeat";
  }
  
  console.log(examScore(10));
  //output Passed

  // STRICT OPERATOR
  /* Use the strict equality operator in the if statement 
  so the function will return the string Equal when val 
  is strictly equal to 7.*/

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


  //EXAMPLE 3 Compare to Equality Operator ==

  function testStrictMan(valMan) {
    if (valMan == "7") { // Change this line
      return "Good Job";
    }
    return "Study Hard";
  }
  
  console.log(testStrictMan(7));

  //example another 
  //strict equality operator that returns passed and fail. 

  function testExamScore(student) {
    if (student === 20) {
        return "Passed"; 
    } else
    if (student === "10"){
        return "Failed"
    }
  }
  console.log(testExamScore(20));
  console.log(testExamScore("10")); 
  //without the exact gives undefined
  
    

  // Comparinb two data types
  function compareEquality(a, b) {
    if (10 === "10") { // Change this line
      return "Yes";
    }
    return "False";
  }
  console.log(compareEquality(10, "10"));

  //Example 2

  function compareDataTypes (c, d) {
    if (10 == "10") {
        return "True";
    }
    return "Not True";
  }

  console.log(compareDataTypes (10 , "10"));