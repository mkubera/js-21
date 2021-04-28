const d = document;
const qs = (el) => d.querySelector(el);

d.addEventListener("DOMContentLoaded", (e) => {
  const loadCatsBtnDOM = qs("#loadCatsBtn");
  const noOfCatsDOM = qs("#noOfCats");
  const dataDOM = qs("#data");

  loadCatsBtnDOM
    .addEventListener("click", (e) => {
      const url = "https://api.thecatapi.com/v1/breeds";

      fetch(url)
        //to sie wydarzy on success
        .then((data) => data.json()) //zmien dane z JSON na JS i podaj dalej
        .then((data) => {
          //dane (data) sa juz w formacie JS
          let noOfCats = noOfCatsDOM.value;
          console.log(data);
          const firstCats = data.filter((cat, index) => index < noOfCats);
          console.log(firstCats);

          firstCats.forEach((cat) => {
            let catDOM = d.createElement("div");
            catDOM.innerHTML = `
              <img 
                src="${cat.image.url}" 
                alt="${cat.name} photo" 
                width="${cat.image.width}" 
                height="${cat.image.height}">
              <h3>
                <a href="${cat.wikipedia_url}" target="_blank">${cat.name}</a> 
                from ${cat.origin}
              </h3>
              <p>${cat.description}</p>
            `;
            dataDOM.appendChild(catDOM);
          });
        });
    })
    //a to wydarzy sie on error
    .catch((err) => console.log(err));
  //jest to sytuacja typu albo-albo
});
