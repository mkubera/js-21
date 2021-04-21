document.addEventListener("DOMContentLoaded", (e) => {
  const users = document.querySelector("#users");
  const box1 = document.querySelector("#Box1");
  const box2 = document.querySelector("#Box2");
  const box3 = document.querySelector("#Box3");
  const paragraph = document.querySelector("#Lorem");
  const testForm = document.querySelector("#testForm");
  const testFormMessage = document.querySelector("#testFormMessage");
  const testFormUsername = document.querySelector("#testFormUsername");
  // const testFormText = document.querySelector("#testForm input[type='text']");
  // const testFormTexts = document.querySelectorAll(
  //   "#testForm input[type='text']"
  // );
  // let testFormTextValue = "";

  // testFormText.addEventListener("input", (e) => {
  //   testFormTextValue = e.target.value;
  //   console.log(testFormTextValue);
  // });

  testForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // let texts = Array.from(testFormTexts).map((t) => ({
    //   [t.placeholder]: t.value,
    // }));

    let user = {
      message: testFormMessage.value,
      username: testFormUsername.value,
    };

    console.log(user);

    const li = document.createElement("li");
    li.innerText = `${user.username} says ${user.message}`;
    console.log(li);
    li.dataset.username = user.username;
    li.dataset.id = 1;
    users.appendChild(li); // dodaj nowo stworzone li do ul
  });

  box2.addEventListener("click", (e) => {
    box2.classList.toggle("big-text");
    box3.classList.toggle("box");
  });

  box1.addEventListener("click", (event) => {
    paragraph.classList.toggle("hidden");
  });

  console.log(2 == "2"); // non-strict
  console.log(2 === "2"); // strict

  const person = {
    isLoggedIn: false,
    isAdmin: false,
    name: "K",
  };

  const people = [
    {
      isLoggedIn: false,
      isAdmin: false,
      name: "K",
    },
    {
      isLoggedIn: false,
      isAdmin: false,
      name: "L",
    },
  ];

  const isLoggedIn = false;

  // if (condition) { kfdkjfd } else { fjdkjfd }
  // condition ? kdkdjd : kfddf;

  person.isLoggedIn
    ? console.log(`Hello, ${person.name}.`)
    : console.log("Pls, log in.");
  // ternary operator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

  const str = `
Hi
There
Dude
`;

  console.log(str);

  if (person.isLoggedIn && person.isAdmin) {
    console.log("Welcome, dude!");
  } else if (!person.isLoggedIn) {
    console.log("Please, log in!");
  } else {
    console.log("None shall pass!");
  }

  let fruit = "Apple";

  switch (fruit) {
    case "Orange":
      console.log("Got orange!");
      break;
    case "Apple":
      console.log("Got apple!");
      break;
    case "Strawberry":
      console.log("Got apple!");
      break;

    default:
      console.log("Got another fruit.");
      break;
  }

  // parametr == argument
  function SayHi(name = "stranger") {
    console.log(`Hi, ${name}.`);
    // name === undefined
    //   ? console.log("Hi, stranger.")
    //   : console.log(`Hi, ${name}.`);
  }

  // ternary operator

  SayHi("Katarzyno");
  SayHi("Martyno");
  SayHi("Jakubie");
  SayHi();

  // arrow function
  // funkcja strzalkowa
  // functional programming (FP)
  const RebelAtDate = (date) => {
    const rebelMsg = `Will rebel at: ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}!`;
    console.log(rebelMsg);
  };

  RebelAtDate(new Date());

  const addThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;
  console.log(addThreeNumbers(1, 2, 3));
});
