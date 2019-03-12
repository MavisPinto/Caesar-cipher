console.log('---WeCode Assessment by Mavis Pinto---');
var n = +process.argv[2];
var shift_pattern = process.argv[3];
var inp_str = '';
var encrypt_str = '';
var masterarray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

if (shift_pattern == "l" || shift_pattern == "L" || shift_pattern == "r" || shift_pattern == "R")
{

  for(var j=4; j < process.argv.length; j++ )
  {
    inp_str += process.argv[j];
    inp_str += ' ';
  }

  var lower_inp_str = inp_str.toLowerCase();
  console.log("String to encode:", inp_str);

  for(var i=0; i < lower_inp_str.length; i++)
  {
// Get the current letter from the input string
    var currentletter = lower_inp_str[i];

    if(currentletter === ' ')
    {
      encrypt_str += ' ';
    }
    else
    {
// Finding the position/index of the current letter in the Master array
      var currentindex = masterarray.indexOf(currentletter);

// If shift pattern is Left
      if(shift_pattern == 'l' || shift_pattern == 'L')
	     {
		      var newindex = currentindex - n;
// If the newindex is negative
		      if(newindex < 0)
		      {
			      newindex = 26 + newindex;
		      }
	     }
// If shift pattern is right
	     else
	     {
		      var newindex = currentindex + n;
//Index should be between 0 to 25
//If newindex is greater than 25 it should be reset
		      if(newindex > 25)
		      {
// Modulus - Remainder of newindex/26
			      newindex = newindex % 26;
		      }
	     }

       if (inp_str[i] === inp_str[i].toUpperCase())
       {
         encrypt_str += masterarray[newindex].toUpperCase();
       }
       else
       {
         encrypt_str += masterarray[newindex];
       }

     }
   }
   console.log("Encoded string:", encrypt_str);
//console.log(encrypt_str);
}
else
{
  console.log('Please enter a valid shift pattern (L or R)');
}
