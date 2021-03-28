// var name = "sda"; //string
// var age = 42; //integer
// var temperature = 37.2; //float
// var cities = ['Belgrade', 'Nis']; //array
// var goggedIn = true //boolean
// var user {
//   name: 'asdas'
/*
[8jfi321dd] Clone and Invert Object
ungraded
Ungraded
Calculated by: Most Recent
Submitted
Available complete
Uploaded complete
Submitted complete
Not Graded Yet incomplete
Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

For example you can use this object. In the end, the cloned object should have inverted keys and values like {23: 'age'}

var student = {
*/



//object

// var go = function() {
//   console.log('sadd')
// } //function

var student = {
  age: 23,
  name: 'Milos',
  surname: 'Lazarevic',
  grade: 1,
  currentModule: '4300FrontEnd'
};

/*
student.age; // dots notation
student['age']; // brackets notation 
// or same if we use a variiable
let jocker = 'age';
student[jocker];
*/


function swapObject(obj) {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    // now we have key and valu
    // we nneed to twist them
    /*
    if we would do this the result would be same
    newObj[key] = val;
    */
   newObj[value] = key;
  });
  console.log(newObj);
  return newObj;
}


// OVO ISPOD MOZES DAOBRISES










function swap(student) {
  var swapped = {}
  for (var key in student) {
    swapped[student[key]] = key
  }
  return swapped;
}
var swapped = swap(student)
console.log(swapped)