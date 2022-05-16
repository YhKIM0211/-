const str =`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/dddd
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi')
// const regexp =  /the/gi
// console.log(str.match(regexp));
// const regexp =/fox/gi
// // console.log(regexp.test(str))
// const str2 = str.replace(regexp, 'AAA') //fox를 AAA변환, 원본을 바꾸지 않으므로 저장하고자하면 할당필요
// console.log(str)
// console.log(str2)

console.log(
  str.match(/^t/gim)
) 
