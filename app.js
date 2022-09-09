console.log('connected')
// const inputName = document.querySelector('[name="name123"]')
// const form = document.querySelector('[name="form"]')
// console.log(inputName);
// console.log(form);

// console.log(inputName.value);
const userInput = document.querySelector('#userName')
const submit = document.querySelector('button')
console.log(userInput, submit)
submit.addEventListener('click',()=>{
    console.log(userInput.value);
    let link = 'https://api.nationalize.io?name='+userInput.value
    console.log(link)
})
