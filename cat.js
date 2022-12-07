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
    
if (catfoods.length == 0){
    document.getElementById ('error').innerHTML+= "выберите хотя бы один вариант <br>";

}}

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
