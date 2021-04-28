const d = document;
const qs = (el) => d.querySelector(el);

d.addEventListener("DOMContentLoaded", (e) => {
  // console.log("Jestem PRZED setTimeout"); //1
  // setTimeout(() => console.log("Czekalam 2s"), 2000); //2
  // setTimeout(() => console.log("Czekalam 1s"), 1000); //3
  // console.log("Jestem PO setTimeout"); //4

  // =============================

  // const greetings = qs("#greetings");

  // let count = 0;

  // const sayHi = setInterval(() => {
  //   let li = d.createElement("li");
  //   li.innerText = String(count); //turn int into string
  //   // don't have to do that, but this clearly shows
  //   // what data type flows through that variable
  //   greetings.appendChild(li);
  //   count++;
  // }, 1000);

  // setTimeout(() => clearInterval(sayHi), 5000);

  // // function(function, integer)
  // setTimeout(() => null, 1)

  // =============================

  const dataDOM = qs("#data");
  const iconDOM = qs("#icon");
  const dateDOM = qs("#date");

  // let data = [];

  // const serverData = [44, 22, 333];

  // setTimeout(() => {
  //   data = serverData;

  //   dataDOM.innerText = String(data);
  // }, 4000);

  const url = "https://api.chucknorris.io/jokes/random";

  fetch(url)
    .then((jsonData) => jsonData.json())
    .then((jsData) => {
      dataDOM.innerText = jsData.value;
      iconDOM.src = jsData.icon_url;
      dateDOM.innerText = new Date(jsData.created_at).toDateString();
    })
    .catch((err) => console.log(err));
});
