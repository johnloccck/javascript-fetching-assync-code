fetch("https://course-api.com/react-tabs-proje")
.then((response) =>{
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`)

    response.json().then((data) => {
        for (let profession of data){
            console.log(profession.title)
        }
    })
}).catch((error) =>{
  console.log("SOMETHIN IS WRONG")
  console.log(error)
})


//kad fechujemo uvek moramo dva puta prvo response sa .jsonom pa onda .then data
//u obicnom hmlu radili bi parse