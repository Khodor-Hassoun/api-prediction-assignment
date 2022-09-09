const userInput = document.querySelector('#userName');
const submit = document.querySelector('button');
const dogImage = document.querySelector('.dog-image');
const list = document.querySelector('.list')
console.log(userInput, submit);



submit.addEventListener('click',()=>{
    console.log(userInput.value);
    let link = 'https://api.nationalize.io?name='+userInput.value
    fetch(link)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data.country)
            let i = 0;
            let countries = data.country;
            for(country of countries){
                let listItem = document.createElement('li')
                let result = document.createElement('b');
                countryCode = country.country_id
                countryProb = country.probability
                console.log(countryCode, countryProb)
                result.innerText= `${countryCode}, ${countryProb}`
                // list.appendChild(listItem)
                listItem.append(result)
                list.append(listItem)
                // console.log(i)
                // i++
            }
        })
        .catch(e=>{
            console.log("Error", e);
        })
})

// Dog image is done
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
