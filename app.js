console.log('connected')
// const inputName = document.querySelector('[name="name123"]')
// const form = document.querySelector('[name="form"]')
// console.log(inputName);
// console.log(form);

// console.log(inputName.value);
const userInput = document.querySelector('#userName')
const submit = document.querySelector('button')
const dogImage = document.querySelector('.dog-image')
let userName = ''
console.log(userInput, submit)
// submit.addEventListener('click',()=>{
//     console.log(userInput.value);
//     let link = 'https://api.nationalize.io?name='+userInput.value
//     console.log(link.body.country)
// })
userName = submit.addEventListener('click',()=>{
    name1 = userInput.value
    return name1
})

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log('Response',res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    dogImage.src = `${data.message}`
  })
  .catch((e) => {
    console.log("Eroor", e);
  });
