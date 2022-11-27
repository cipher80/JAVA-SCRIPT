//      printing right angle triangle(increasing pattern)  //

// let a = 5;
//  let string = "" ;
// for (let i=0 ; i<a ; i++)
// {
//     for( let j=0 ; j<i ; j++)
//     { 
//     string += "*" ;
//     }
//     string += "\n";
// }

// console.log(string);



//           printing    stars in decreasing order  //

// let a = 5;
//  let string = "" ;
// for (let i=0 ; i<a ; i++)
// {
//     for( let j=0 ; j<a-i; j++)
//     { 
//     string += "*" ;
//     }
//     string += "\n";
// }

// console.log(string);


//           printing square by stars     //

// let a = 4;
//  let string = "" ;
// for (let i=0 ; i<a ; i++)
// {
//     for( let j=0 ; j<a ; j++)
//     { 
//     string += "*" ;
//     }
//     string += "\n";
// }

// console.log(string);



//             printing left side right angle triangle           //

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);




