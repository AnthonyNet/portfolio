/* THX Dave Kopáčik */
  
const links = document.querySelectorAll('li');
const checkbox = document.querySelector('#navi-toggle');

for(let i=0;i<links.length;i++){
  links[i].addEventListener('click', function(){
    checkbox.click();
  })
}


$(document).ready(function () {


});