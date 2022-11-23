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
let button = document.getElementById ('button');
button.addEventListener("click", function() {
    check();
    
  });
  function check() {
    let checkd = document.querySelectorAll('input[type="checkbox"]');
if (checkd.checked.length > 0)
return true
}

