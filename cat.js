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
*/
/*Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), 
и по нажатию на кнопку "Ок" создайте экземпляр этого класса, 
заполнив его свойства ответами из опросника. 
В этом классе будут только свойства и конструктор, без методов. 
Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.*/

/*let button = document.getElementById ('button');
button.addEventListener("click", function() {
    check()
      });
  function check() {
    let checkd = document.querySelectorAll('input[type="checkbox"]:checked');
if (checkd.checked == false)
return false
else{
alert('выберите хотя бы один вариант')
}
}*/
class Cat {
    constructor (name, breeds, food, sex){
    this.name = name;
    this.breeds = breeds;
    this.food = food;
    this.sex = sex;
    }
   
}
   
    
        let name2 = document.getElementById ('name').value;
        //let breeds2 = document.querySelector('select[name="breeds"].checked').nextElementSibling.textContent;
        let food2 = document.querySelectorAll('input[type="checkbox"]:checked').nextElementSibling.textContent;
        let sex2 = document.querySelector('input[type="radio"]:checked').value;

    let mycat = new Cat(name2, breeds2, food2, sex2 );
    
   console.log(mycat);
   let button = document.getElementById ('button');
   button.addEventListener("click", console.log(mycat)
         );
  
