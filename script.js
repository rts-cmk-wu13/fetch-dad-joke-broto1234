
//----------fetch from URLs dadjoke.com ----------

  
fetch("https://icanhazdadjoke.com/", {
  headers: {
    "Accept": "application/json"
  }
  })
  .then(response => response.json())
  .then(data => {

    // console.log(data);
      const bodyElm = document.querySelector(".showData");
      bodyElm.innerHTML = `
      ID: ${data.id}, and the Joke is - ${data.joke}
      `
})