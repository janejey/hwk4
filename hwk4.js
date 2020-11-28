// //1
// function evenNumbers(min, max) {
//   let result = [];
//   for (let i = min; i <= max; i++) {
//     let evennum = true;
//     let nums = i + '';
//     for (let j = 0; j < nums.length; j++) {
//     if (nums[j] % 2 === 1) {
//       evennum = false;
//       break;
//     }
//   } if (evennum === true) {
//     result.push(i)
//   }
//   } if (result.length > 0) {
//     return result.join(',')
//   } else {
//     return 'Such numbers does not exist.'
//   }
// }
// console.log(evenNumbers(99, 199))


// //2
// function deleteword(arr, letter) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === letter.toUpperCase() || arr[i][0] === letter.toLowerCase()) {
//       continue;
//     } else {arr1.push(arr[i])
//   }
// }return arr1
// } 
// console.log(deleteword(['Godfather', 'Game of thrones', 'Social Network'], 'g'))


// //3
// function filterRange (arr, a, b) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a && arr[i] < b) {
//       arr1.push(arr[i])
//     }
//   } return arr1
// }
// console.log(filterRange([100, 200, 300], 9, 23))


// //4 it's half done, because I'm very tired(
// function telnum (num) {
//   let result = 'Bad number';
//   for (let i = 0; i < num.length; i++) {
//     if (num.length === 11 && num[0] === '+' ) {
//       result = num.substring(1)
//     } else if (num.length === 10) {
//       result = num
//     }
//       }return result}

// console.log(telnum('+0008909562'))

// //5
// function repeat(str1, str2) {
//   let sentence = '';
//   if (str1.length > str2.length) {
//   for(let i = 0; i < str1.length; i++) {
//     if(sentence.length < str2.length) {
//       sentence += str2[i]
//       } else {sentence += sentence[i - str2.length]
// }
//     }
//   } else { for(let i = 0; i < str2.length; i++) {
//     if(sentence.length < str1.length) {
//       sentence += str1[i]
//       } else {sentence += sentence[i - str1.length]
// } 
//   }
// } return sentence 
// }
// console.log(repeat("clap", "skipping"))