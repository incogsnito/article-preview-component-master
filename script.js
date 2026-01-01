const share = document.querySelector('.btn');
const bottom = document.querySelector('.bottom');

share.addEventListener('click', () =>{
  bottom.classList.toggle("active");
})