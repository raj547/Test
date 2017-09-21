/*var JohnHeight=5.9;
var DanyHeight= 5.4;
var JohnAge= 25 ;
var DanyAge= 23 ;
var a= JohnHeight + JohnAge* 5 ;
var b= DanyHeight +DanyAge*5 ;
if (a > b)
console.log( "John is Thopp & his Height is " + JohnHeight);

else

	console.log("Dany is a bitch!");

var CerceiHeight= 5.5;
var CerceiAge= 10;
var c= CerceiHeight + CerceiAge*5;
if (c>b &&   c>a )   	
          console.log("Cercei gets the Throne with height" + CerceiHeight +" and kills John");

else
	console.log("Dany Wins the Throne");
	*/

 /*function ageCalculator(yearOfBirth) {
var age=2017- yearOfBirth;
return age;

}
var ageJohn=ageCalculator(1991);
var agePav=ageCalculator(1960);
//console.log(agePav);


function RetirementYears(name,yearOfBirth){
 var age=ageCalculator(yearOfBirth);
 var retirement=65-age;

//console.log(retirement);
}


RetirementYears('John',1991);

*/
/*
function TataMotorsSale(unitsSold) {

var indica = unitsSold + 100;
var jeep= unitsSold + 50;
var total= indica + jeep;

return total;
}


console.log(TataMotorsSale(10));


*/

/*
var cars = ['Jeep','Innova','City'];
var Brand=['Merc','Audi','BMW'];
console.log(cars , Brand);


cars.pop();

console.log(cars);
*/
//
/*
<!DOCTYPE html>
<html>
<body>

<p>The charAt() method returns the character at a given position in a string:</p>

<p id="demo"></p>

<script>
var x=0;
var str = "HELLO  HELLO  WORLD";
document.getElementById("demo").innerHTML = str.charAt(0);
for(i=0;i<str.length;i++){
if(str.charAt(i)=='H'){

if(str.charAt(i+1)=='E'&&str.charAt(i+2)=='L'&&str.charAt(i+3)=='L'&&str.charAt(i+4)=='O'){
x++;

}
}
}
document.write(x);
</script>
</body>
</html>

<!DOCTYPE html>
<html>
<body>

<p>Click "Try it" to display the first array element, after a string split.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
 var x=0;
function myFunction() {
    var str = "Hello|Hello|world";
    var arr = str.split("|");
    document.getElementById("demo").innerHTML = arr[0];
    for(i=0;i<arr.length;i++){
    if(arr[i]=="Hello"){
    x++;
    
    }
}
document.write(x);
}

</script>

</body>
</html>



// OBJECTS
var City={
  Brand:'Honda',
  Make:2006,
  AutoPliot: 'Yes',
  Cost: '12 lakhs'
};
console.log(City.Make);
var Cost='1lakh Price';
console.log(City.Cost);

City.AutoPliot='No';
City.Cost='10 Lakhs';
console.log(City);

var City=new Object();
City.name='Honda City';
City['Cost']='12.2 Lakhs';
City.Buying= false;
console.log(City);
*/


var raj={fname:"Raj",mname:"Sekhar",lname:"Yellanki",id:2060};
raj.sex="male";
delete raj.sex;
new.date();
//for (x=0;x<10;x++){

//}


console.log(raj);






