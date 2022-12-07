//let form =  document.getElementById ('form');
let button = document.getElementById ('button');
let mycatname = document.getElementById("name").value;
let breed = document.getElementById("breeds").value;
let catfoods = Array.from(document.querySelectorAll('input[name="food"]:checked'));
let mycatfood = catfoods.map((item) => item.value);
let catsex = Array.from(document.querySelectorAll('input[name="sex"]:checked'));
let mycatsex = catsex.map((item) => item.value);
button.onclick = function() {
    check()
    console.log(mycat)
      }
      
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
button.addEventListener('click' , function(event) {
   
    event.preventDefault();
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

