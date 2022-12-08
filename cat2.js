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

let button = document.getElementById ('button');
let mycatname = document.getElementById("name").value;
let breed = document.getElementById("breeds").value;
let catfoods = Array.from(document.querySelectorAll('input[name="food"]:checked'));
let mycatfood = catfoods.map((item) => item.value);
let catsex = Array.from(document.querySelectorAll('input[name="sex"]:checked'));
let mycatsex = catsex.map((item) => item.value);
button.addEventListener("click", function() {
    check()
    console.log(mycat)
    
      });
  function check() {
    document.getElementById ('error').innerHTML=" ";
    
if (mycatfood.length == 0){
    document.getElementById ('error').innerHTML+= "выберите хотя бы один вариант <br>";
    return true;
    }
    return false;
}

class Cat {
  constructor(name, breeds, food, sex) {
    this.name = name;
    this.breeds = breeds;
    this.food = food;
    this.sex = sex;
  }
}

let mycat = new Cat(mycatname, breed, mycatfood, mycatsex);
console.log(mycat);

button.addEventListener('click' , function(e) {
   
    e.preventDefault();
    
    fetch('https://httpbin.org/post',
    {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
.catch(error => console.log(error));
});
