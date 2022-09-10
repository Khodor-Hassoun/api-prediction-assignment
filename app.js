const userInput = document.querySelector('#userName'); // User will input the name before submitting
const submit = document.querySelector('button');
const dogImage = document.querySelector('.dog-image');
const inputContainer = document.querySelector('.javascript-outputs');
const list = document.createElement('ol');
const genderRes = document.createElement('p');
const ageRes = document.createElement('p');
// console.log(userInput, submit);



submit.addEventListener('click',()=>{
    console.log(userInput.value);
    if(userInput.value ==''){
        return inputContainer.innerHTML = '<h2>Enter a name please</h2>'
    }else{
        inputContainer.innerHTML = ''
    }

    // Add the name from userInput to the query string
    let link = 'https://api.nationalize.io?name='+userInput.value
    // Gender below
    fetch("https://api.genderize.io?name=" + userInput.value)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let gender = data.gender;
        genderRes.innerText = `Your Gender is: ${gender}`;
        inputContainer.append(genderRes);
      })
      .catch((e) => {
        console.log("Error", e);
      });

    //   Start of age api
    fetch('https://api.agify.io?name='+userInput.value)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            let age = data.age;
            ageRes.innerText = `Your age is: ${age}`;
            inputContainer.append(ageRes);
        })
        .catch(e=>{
            console.log('error',e)
        })

    // Nationality api below
    fetch(link)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data.country)
            let i = 0;
            let countries = data.country;
            if(data.country.length != 0){
                while (list.hasChildNodes()) {
                  list.removeChild(list.firstChild);
                }
                for (country of countries) {
                  const listItem = document.createElement("li");
                  const result = document.createElement("b");
                  countryCode = country.country_id;
                  countryProb = country.probability;
                  console.log(countryCode, countryProb);
                  result.innerText = `${countryCode}, ${countryProb}`;
                  listItem.append(result);
                  list.append(listItem);
                  inputContainer.append(list)
                }
            }else{
                while (list.hasChildNodes()) {
                    list.removeChild(list.firstChild);
                }
                let result = document.createElement("p");
                result.innerText= `Looks like you don't have a nationality :(`
                inputContainer.append(result)
            }
        })
        .catch(e=>{
            console.log("Error", e);
        });
})



// Dog image api is done
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    // console.log('Response',res);
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    dogImage.src = `${data.message}`
  })
  .catch((e) => {
    console.log("Error", e);
  });
