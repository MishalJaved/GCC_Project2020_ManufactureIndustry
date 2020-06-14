/*...............(START) ASSIGNMENT 1 JAVASCRIPT "ALERTS"...............*/

    /* Assignment 1 Task 1 */

        alert("Welcome to Mishal's Website");

    /* Assignment 1 Task 2 */
        alert("Error! Please Enter a Valid Password!");

    /* Assignment 1 Task 3 */ 
        alert("Welcome to JS Land...\nHappy Coding!!");

    /* Assignment 1 Task 4 .........................................................? */ 

    /* Assignment 1 Task 5 
        "Snipping tool name 'Task 5_A1' have this task"
    */

    /* Assignment 1 Task 6 
        Have used alerts in my project
    */ 

/*...............(END) ASSIGNMENT 1 JAVASCRIPT "ALERTS"...............*/

/*...............(START) ASSIGNMENT 2 JAVASCRIPT "VARIABLES FOR STRINGS"...............*/

    /* Assignment 2 Task 1 */
        var username;

    /* Assignment 2 Task 2 */
        var myName = "Mishal Javed";

    /* Assignment 2 Task 3(a)(b) */
        var message = "Hello World";

    /* Assignment 2 Task 3(c) */
        alert(message);

    /* Assignment 2 Task 4 */
        var stdName = "Jhon Doe";
        alert(stdName);
        var stdAge = "18 years old";
        alert (stdAge);
        var stdAchieve = "Certified Mobile Application Development";
        alert (stdAchieve);

    /* Assignment 2 Task 5 */
        var decPizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
        alert(decPizza);

    /* Assignment 2 Task 6 */
        var email = "mishaljaved333@gmail.com";
        alert("My Email Address is: "+ email);

    /* Assignment 2 Task 7 */
        var book = "A Smarter Way to Learn Javascript";
        alert("I am trying to learn from the book "+book);

    /* Assignment 2 Task 8 */
        document.write("Yah! I can write HTML thorugh JAVASCRIPT <br><br>");

    /* Assignment 2 Task 9 */
        var symbolString = "----------STRING----------";
        alert(symbolString);

/*...............(END) ASSIGNMENT 2 JAVASCRIPT "VARIABLES FOR STRINGS"...............*/

/*...............(START) ASSIGNMENT 3 JAVASCRIPT "VARIABLES FOR NUMBERS"...............*/
    
    /* Assignment 3 Task 1 */
        var age = 22;
        alert("I am " + age + " Years old");

    /* Assignment 3 Task 2 .........................................................................???????????????*/

    /* Assignment 3 Task 3 */
        var birthYear = 1997;
        document.write('My Birth year is' + birthYear + '<br>Datatype of my declared variable is number');
    
    /* Assignment 3 Task 4 */
        var visitorName = "Jhon Doe";
        var ProdTitle = "T-shirt(s)";
        var qty = 5;
        var storeName = "XYZ Clothing Store";
        document.write('<br><br>' + visitorName + '\nordered\n' + qty + '\n' + ProdTitle + '\non\n' + storeName );

/*...............(END) ASSIGNMENT 3 JAVASCRIPT "VARIABLES FOR NUMBERS"...............*/


/*...............(START) ASSIGNMENT 4 JAVASCRIPT "VARIABLE NAMES: LEGAL & ILLEGAL"...............*/

    /* Assignment 4 Task 1 */
        var var1, var2, var3;

    /* Assignment 4 Task 2 */
        var legalVar1, legalvar2, legal3var, legal_var_4, legal$var5; /*Legal Variable Names*/
      /*var illegal var1, 2illegalvar, illegalvar!3, alert illegalvar4, 5 illegalvar  Legal Variable Names*/

    /* Assignment 4 Task 3 */
        document.write('<br><br><h1>Rules for naming JS variables<br></h1><br>'); /*Task 3(a)*/
        document.write('Variable names can only contain <u>letters, numbers, underscore & dollar sign</u>.<br>');  /*Task 3(b)*/
        document.write('Variables must begin with a <u>dollar sign, underscore or letters</u>. For example $name, _name or name<br>');  /*Task 3(c)*/
        document.write('Variable names are case <u>Sensitive</u><br>');  /*Task 3(d)*/
        document.write('Variable names should not be JS <u>Keywords</u><br>');  /*Task 3(e)*/

/*...............(END) ASSIGNMENT 4 JAVASCRIPT "VARIABLE NAMES: LEGAL & ILLEGAL"...............*/


/*...............(START) ASSIGNMENT 5 JAVASCRIPT "MATH EXPRESSIONS"...............*/

    /* Assignment 5 Task 1 */
        var num1 =  parseInt(prompt('Enter 1st number for addition')) ;
        var num2 = parseInt( prompt('Enter 2nd number for addition'));
        var addResult = num1 + num2;
        addResult = parseInt(addResult);
        document.write('<h3>Assignment 5 Task 1<br></h3> Sum of '+ num1 + '\nand\n' + num2 + '\nis\n' + addResult + '<br> ');      
        
    /* Assignment 5 Task 2 (b) */
        var num3 =  parseInt(prompt('Enter 1st number for subtraction')) ;
        var num4 = parseInt( prompt('Enter 2nd number for subtraction'));
        var subResult = num3 - num4;
        subResult = parseInt(subResult);
        document.write('<h3>Assignment 5 Task 2(a)<br></h3> Subtraction of '+ num3 + '\nand\n' + num4 + '\nis\n' + subResult + '<br> ');     

    /* Assignment 5 Task 2 (c) */
        var num5 =  parseInt(prompt('Enter 1st number for multiplication')) ;
        var num6 = parseInt( prompt('Enter 2nd number for multiplication'));
        var multResult = num5 * num6;
        multResult = parseInt(multResult);
        document.write('<h3>Assignment 5 Task 2(b)<br></h3> Multiplication of '+ num3 + '\nand\n' + num4 + '\nis\n' + multResult + '<br> ');  
        
    /* Assignment 5 Task 2 (d) */
        var num7 =  parseFloat(prompt('Enter 1st number for division')) ;
        var num8 = parseFloat( prompt('Enter 2nd number for division'));
        var divResult = num7 / num8;
        divResult = parseFloat(divResult);
        document.write('<h3>Assignment 5 Task 2(c)<br></h3> Division of '+ num7 + '\nand\n' + num8 + '\nis\n' + divResult + '<br> ');  
 
    /* Assignment 5 Task 2 (e) */
        var num9 =  parseFloat(prompt('Enter 1st number for modulus')) ;
        var num10 = parseFloat( prompt('Enter 2nd number for modulus'));
        var modResult = num9 % num10;
        modResult = parseFloat(modResult);
        document.write('<h3>Assignment 5 Task 2(d)<br></h3> Modulus of '+ num9 + '\nand\n' + num10 + '\nis\n' + modResult + '<br> ');  
    
    /* Assignment 5 Task 3 (a) */
        var task3var;
    /* Assignment 5 Task 3 (b) */
        document.write('<h3>Assignment 5 Task 3(b)<br></h3> Value after variable declaration is '+task3var + '<br>');

    /* Assignment 5 Task 3 (c) */
        var task3var2 = 10;

    /* Assignment 5 Task 3 (d) */
        document.write('<h3>Assignment 5 Task 3(d)<br></h3> Initialization value is '+task3var2 + '<br>');

    /* Assignment 5 Task 3 (e) */
        task3var2 = ++task3var2;

    /* Assignment 5 Task 3 (f) */
        document.write('<h3>Assignment 5 Task 3(f)<br></h3> Value after increment is = '+task3var2 + '<br>');

    /* Assignment 5 Task 3 (g) */
        task3var2 = task3var2 + 7;

    /* Assignment 5 Task 3 (h) */
        document.write('<h3>Assignment 5 Task 3(h)<br></h3> Value after addition is = '+task3var2 + '<br>');

    /* Assignment 5 Task 3 (i) */
        task3var2 = --task3var2;

    /* Assignment 5 Task 3 (j) */
        document.write('<h3>Assignment 5 Task 3(j)<br></h3> Value after decrement is = '+task3var2 + '<br>');

    /* Assignment 5 Task 3 (k) */
        task3var2 = parseFloat(task3var2 % 3);

    /* Assignment 5 Task 3 (l) */
        document.write('<h3>Assignment 5 Task 3(l)<br></h3> Output: The remainder is = '+task3var2 + '<br>');

    /* Assignment 5 Task 4 */
        var movieTicketCost = 600;
        var ticketQty = 5;
        movieTicketCost = parseInt(movieTicketCost);
        ticketQty = parseInt(ticketQty);
        var totalCost = movieTicketCost * ticketQty;
        totalCost = parseInt(totalCost);
        
        document.write('<h3>Assignment 5 Task 4<br></h3> Total cost to buy '+ticketQty + ' Movie Tickets is ' +totalCost+ ' PKR '+ '<br>');


/*...............(END) ASSIGNMENT 5 JAVASCRIPT "MATH EXPRESSIONS"...............*/

