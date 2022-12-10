/*function deRequireCb(elClass) {
    el=document.getElementsByClassName(elClass);

    var atLeastOneChecked=false;
    for (i=0; i<el.length; i++) {
        if (el[i].checked === true) {
            atLeastOneChecked=true;
        }
    }

    if (atLeastOneChecked === true) {
        for (i=0; i<el.length; i++) {
            el[i].required = false;
        }
    } else {
        for (i=0; i<el.length; i++) {
            el[i].required = true;
        }
    }
}
let user = {
        mycatname: document.getElementById("name").value,
breed : document.getElementById("breeds").value,
catfoods : Array.from(document.querySelectorAll('input[name="food"]:checked')),
mycatfood : catfoods.map((item) => item.value),
mycatsex : document.querySelectorAll('input[name="sex"]:checked').value
    }
*/
/*Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), 
и по нажатию на кнопку "Ок" создайте экземпляр этого класса, 
заполнив его свойства ответами из опросника. 
В этом классе будут только свойства и конструктор, без методов. 
Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.*/

button.addEventListener(
  "click",
  function () {
    check();
    sentIt();
  },

  class Cat {
    constructor(name, breeds, food, sex) {
      this.name = name;
      this.breeds = breeds;
      this.food = food;
      this.sex = sex;
    }

    mycatname = document.getElementById("name").value;
    breed = document.getElementById("breeds").value;
    catfoods = Array.from(
      document.querySelectorAll('input[name="food"]:checked')
    );
    mycatfood = catfoods.map((item) => item.value);
    catsex = Array.from(document.querySelectorAll('input[name="sex"]:checked'));
    mycatsex = catsex.map((item) => item.value);
    mycat = new Cat(mycatname, breed, mycatfood, mycatsex);
    mycat = console.log(mycat);
  }
);

function check() {
  document.getElementById("error").innerHTML = " ";
  let catfoods = Array.from(
    document.querySelectorAll('input[name="food"]:checked')
  );
  let mycatfood = catfoods.map((item) => item.value);
  if (mycatfood.length == 0) {
    document.getElementById("error").innerHTML +=
      "выберите хотя бы один вариант <br>";
  } else {
    sentIt();
  }
}

function sentIt() {
  let e = window.event;

  e.preventDefault();

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: new FormData(form),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((mycat) => {
      console.log(mycat);
    })
    .catch((error) => console.log(error));
}
