const input = document.querySelector('input');
const list = document.querySelector('ul');

function handlekeyup(e) {
   if(e.key === 'Enter') {
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    list.appendChild(newLi);

    input.value = '';

   }

}

input.addEventListener('keyup', handlekeyup);